package com.example;

import jakarta.ws.rs.core.Application;
import java.util.Set;

@jakarta.ws.rs.ApplicationPath("data")
public class ApplicationConfig extends Application {
    
    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new java.util.HashSet<>();
        addRestResourceClasses(resources);
        // resources.add(de.fhbielefeld.scl.rest.exceptions.handlers.GeneralExceptionMapper.class);
        return resources;
    }

    private void addRestResourceClasses(Set<Class<?>> resources) {
        resources.add(StatisticResource.class);
        resources.add(CorsFilter.class);
    }

}
