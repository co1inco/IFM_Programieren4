package com.example;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.io.IOException;

public class LayoutController extends HttpServlet {
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        String path = request.getServletPath();
        
        // Check if this is a static resource (should not be wrapped)
        if (isStaticResource(path)) {
            // Delegate to default servlet for static files
            RequestDispatcher dispatcher = request.getServletContext().getNamedDispatcher("default");
            if (dispatcher != null) {
                dispatcher.forward(request, response);
            }
            return;
        }
        
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
            case "/":
                pagePath = "/WEB-INF/pages/index.jsp";
                break;
            default:
                // Unknown page routes - delegate to default servlet
                // RequestDispatcher dispatcher = request.getServletContext().getNamedDispatcher("default");
                // if (dispatcher != null) {
                //     dispatcher.forward(request, response);
                // }
                return;
        }
        
        // Set the page as a request attribute for the layout to include
        request.setAttribute("page", pagePath);
        
        // Forward to the layout
        RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/layout/main.jsp");
        dispatcher.forward(request, response);
    }
    
    /**
     * Check if the path is a static resource that shouldn't be wrapped with layout
     */
    private boolean isStaticResource(String path) {
        return path.matches(".*\\.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$");
    }
}

