package com.example;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.WebServlet;
import java.io.IOException;

@WebServlet(name = "LayoutController", urlPatterns = {"/", "/about", "/hello"})
public class LayoutController extends HttpServlet {
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        String path = request.getServletPath();
        String pagePath;
        
        // Route requests to appropriate page
        switch (path) {
            case "/about":
                pagePath = "/WEB-INF/pages/about.jsp";
                break;
            case "/hello":
                // Hello page also uses the layout
                pagePath = "/WEB-INF/pages/hello.jsp";
                break;
            default: // "/"
                pagePath = "/WEB-INF/pages/index.jsp";
        }
        
        // Set the page as a request attribute for the layout to include
        request.setAttribute("page", pagePath);
        
        // Forward to the layout
        RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/layout/main.jsp");
        dispatcher.forward(request, response);
    }
}
