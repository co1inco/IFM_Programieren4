package com.example;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import javax.naming.NamingException;

import com.example.data.DataAccessor;
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
                rows.add(new PercentileData(percentileNumbers.get(i), Float.parseFloat(result.getString(i+1))));
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
        
        
        // return Response
        //     .ok(String.format("Hello world %s, %s", table, column))
        //     .build();
    }

}
