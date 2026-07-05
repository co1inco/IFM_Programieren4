package com.example.data;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

public class DataAccessor {
    
    protected String jndi = null;
    protected DataSource ds = null;
    protected String smartdataRequest; // Contains last called URL
    private Logger logger;

    public DataAccessor() {
        this.logger = Logger.getLogger("DataAccessor");

        this.jndi = "jdbc/SmartData";

        try {
            InitialContext ctx = new InitialContext();
            this.ds = (DataSource) ctx.lookup(this.jndi);
        } catch (NamingException ex) {
            logger.log(Level.SEVERE, "Could not access connection pool", ex);
        }

        // // Get SmartData instance name
        // int lastSlash = smartdataurl.lastIndexOf("/");
        // String smartdataname = smartdataurl;
        // if (lastSlash >= 0) {
        //     smartdataname = smartdataurl.substring(lastSlash + 1);
        // }
        // // Load configuration for instance
        // Configuration conf = new Configuration(smartdataname);
        // this.jndi = conf.getProperty("postgres.jndi");
        // if (this.jndi == null) {
        //     this.jndi = "jdbc/SmartData";
        // }
        // try {
        //     InitialContext ctx = new InitialContext();
        //     this.ds = (DataSource) ctx.lookup(this.jndi);
        // } catch (NamingException ex) {
        //     Message msg = new Message("", MessageLevel.ERROR, "Could not access connection pool: " + ex.getLocalizedMessage());
        //     Logger.addMessage(msg);
        // }
    }

    public Connection getConnection() {
        if (this.ds == null) {
            return null;
        }
        try {
            return this.ds.getConnection();
        } catch (SQLException ex) {
            
            logger.log(Level.SEVERE, "Could not connected to database", ex);
        }
        return null;
    }
}
