package com.example;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.io.IOException;
public class HelloServlet extends HttpServlet {
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    resp.setContentType("text/plain");
    var test = "Hello world ABC DEF";
    // resp.getWriter().println("Hello from Payara!");
    resp.getWriter().println(test);
  }
}