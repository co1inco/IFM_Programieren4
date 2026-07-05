package com.example;

import java.io.Serializable;

import javax.naming.NamingException;

import jakarta.json.*;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DefaultValue;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;


@Path("statistic")
// @Tag(name = "Statistics")
public class StatisticResource {
    
    public StatisticResource() {
    }


    @GET
    @Path("percentile")
    @Produces(MediaType.APPLICATION_JSON)
    public Response percentile() {


        return Response.ok("Hello world").build();
    }

}
