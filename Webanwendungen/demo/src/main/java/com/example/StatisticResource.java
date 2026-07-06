package com.example;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import javax.naming.NamingException;

import com.example.data.DataAccessor;
import com.example.data.MinMaxSpanResponseData;
import com.example.data.PercentileData;

import jakarta.json.*;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DefaultValue;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;


@Path("statistic")
// @Tag(name = "Statistics")
public class StatisticResource {
    
    private final Logger logger = Logger.getLogger(StatisticResource.class.getName());

    public StatisticResource() {
    }


    @GET
    @Path("percentile/{table}/{column}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response percentile(
        @PathParam("table") String table,
        @PathParam("column") String column,
        @QueryParam("percentiles") String[] percentiles
    ) {

        List<Float> percentileNumbers = new ArrayList<>();
        if (percentiles.length == 0) {
            percentileNumbers.add(0.25f);
            percentileNumbers.add(0.5f);
            percentileNumbers.add(0.75f);
        } else {
            for (String p : percentiles) {
                
                try {
                    Float f = Float.parseFloat(p);

                    if (f < 0 || f > 1) 
                        throw new Exception("Percentile out of range: " + p);

                    percentileNumbers.add(f) ;
                } catch (Exception ex) {
                    return Response
                        .status(400, ex.getMessage())
                        .build();
                }
            }
        }

        DataAccessor acc = new DataAccessor();
        Connection conn = acc.getConnection();
        
        try {

            if (!DataAccessor.tableExists(conn, "public", table))   {
                return Response
                    .status(404, "Table does not exist")
                    .build();
            }
            if (!DataAccessor.columnExists(conn, "public", table, column))   {
                return Response
                    .status(404, "Table column does not exist")
                    .build();
            }

            String percentileSql = "";
            for (int i = 0; i < percentileNumbers.size(); i++) {
                if (percentileSql.length() != 0) {
                    percentileSql += ", ";
                }
                percentileSql += String.format(
                    "PERCENTILE_CONT(%f) within group (order by t.%s asc) as percentile_%d",
                    percentileNumbers.get(i),
                    column,
                    i
                );
            }



            PreparedStatement command = conn.prepareStatement("SELECT " + percentileSql +  " FROM " + "public." + table + " t");
            ResultSet result = command.executeQuery();
            
            List<PercentileData> rows = new ArrayList<>();
            if (!result.next())
                throw new Exception("No percentile data");
            
            for (int i = 0; i < percentileNumbers.size(); i++) {
                int ci = i+1;

                rows.add(new PercentileData(
                    percentileNumbers.get(i), 
                    result.getObject(ci)
                ));
            }

            return Response
                .ok(rows)
                .build();

        } catch (SQLException ex) {
            logger.warning(ex.getMessage());

            return Response
                .status(400, ex.getMessage())
                .build();

        } catch (Exception ex) {
            logger.warning(ex.getMessage());

            return Response
                .status(400, ex.getMessage())
                .build();
        }
    }


    @GET
    @Path("minmaxspan/{table}/{column}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response minmaxspan(
        @PathParam("table") String table,
        @PathParam("column") String column,
        @QueryParam("schema") @DefaultValue("public") String schema,
        @QueryParam("dateattribute") @DefaultValue("") String dateattribute,
        @QueryParam("start") @DefaultValue("0001-01-01T00:00") String startDateStr,
        @QueryParam("end") @DefaultValue("9999-12-31T23:59:59") String endDateStr
    ) {

        DataAccessor acc = new DataAccessor();
        Connection conn = acc.getConnection();
        
        try {

            if (!DataAccessor.tableExists(conn, "public", table))   {
                return Response
                    .status(404, "Table does not exist")
                    .build();
            }
            if (!DataAccessor.columnExists(conn, "public", table, column))   {
                return Response
                    .status(404, "Table column does not exist")
                    .build();
            }
            if (dateattribute.length() > 0 && !DataAccessor.columnExists(conn, "public", table, dateattribute))   {
                return Response
                    .status(404, "Date column does not exist")
                    .build();
            }
            
            String sql = "SELECT MIN(v.%2$s), MAX(%2$s), MAX(%2$s) - MIN(%2$s) FROM public.%1$s v";
            
            if (dateattribute.length() > 0) {
                String dateSql = " WHERE v.%1$s >= '%2$s' AND v.%1$s <= '%3$s'";
                sql += String.format(dateSql, dateattribute, startDateStr, endDateStr);
            }

            PreparedStatement command = conn.prepareStatement(String.format(sql, table, column));

            ResultSet result = command.executeQuery();
            
            if (!result.next())
                throw new Exception("No percentile data");
            
            MinMaxSpanResponseData data = new MinMaxSpanResponseData(
                result.getObject(1),
                result.getObject(2),
                result.getObject(3)
            );
            
            return Response
                .ok(data)
                .build();

        } catch (SQLException ex) {
            logger.warning(ex.getMessage());

            return Response
                .status(400, ex.getMessage())
                .build();

        } catch (Exception ex) {
            logger.warning(ex.getMessage());

            return Response
                .status(400, ex.getMessage())
                .build();
        }
    }
}
