package com.example;

import java.net.URI;


import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.FormParam;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.HeaderParam;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.NewCookie;
import jakarta.ws.rs.core.Response;

@Path("user")
public class UserResource {
    

    @POST
    @Path("login")
    // @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public Response login(
        @FormParam("email") String email, 
        @FormParam("password") String password,
        @HeaderParam("Referer") String referer) {

        String redirectUrl = referer != null ? referer : "/";

        NewCookie cookie = new NewCookie(
            "loggedIn",              // cookie name
            "true",                  // cookie value
            "/",                     // path
            null,                    // domain (null = current domain)
            null,                    // comment
            3600,                    // max-age in seconds (1 hour)
            false,                   // secure (set true if using HTTPS)
            true                     // httpOnly (prevents JS access if true)
        );

        return Response
            .status(Response.Status.FOUND)
            .location(URI.create(redirectUrl))
            .cookie(cookie)
            .build();
    }

    @GET 
    @Path("login_test")
    public Response get_login() {


        return Response.ok("hello world").build();
    }
}
