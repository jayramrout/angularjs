package jrout.tutorial.servlet;

import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;
import java.util.Iterator;

/**
 * Created by jrout on 8/21/2015.
 */
@WebServlet(name = "HelloWorld", urlPatterns = "/helloWorld")
public class HelloWorld extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        System.out.println("Request has come");
        out.println("Hello Guys" + new java.util.Date());
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println(request.getParameter("ONE"));
        JSONObject jObj = new JSONObject(request.getParameter("ONE")); // this parses the json
        Iterator<String> it = jObj.keys(); //gets all the keys

        while(it.hasNext()) {
            String key = it.next(); // get key
            Object o = jObj.get(key); // get value
        }
        Enumeration<String> parameters = request.getParameterNames();
        while (parameters.hasMoreElements()) {
            System.out.println(parameters.nextElement());
        }
    }
}