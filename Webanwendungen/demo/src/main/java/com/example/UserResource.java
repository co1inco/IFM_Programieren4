package com.example;

import java.net.URI;


import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.FormParam;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.HeaderParam;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("user")
public class UserResource {
    

    @POST
    @Path("login")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    public Response login(
        @FormParam("email") String email, 
        @FormParam("password") String password,
        @HeaderParam("Referer") String referer) {

        String redirectUrl = referer != null ? referer : "/";
        return Response
            .status(Response.Status.FOUND)
            .location(URI.create(redirectUrl + "/test"))
            .build();
    }

    @GET 
    @Path("login_test")
    public Response get_login() {


        return Response.ok("hello world").build();
    }
}
