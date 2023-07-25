import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class StudentServlet extends HttpServlet 
{
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException 
    { 

        // Retrieve student details from the request parameters
        String name = request.getParameter("name");
        String rollNumber = request.getParameter("rollNumber");
        String course = request.getParameter("course");

        // Database connection details
        String jdbcUrl = "jdbc:mysql://localhost:3306/mydatabase";
        String username = "root";
        String password = "password";

        // Insert student details into the database
        try {
            Connection conn = DriverManager.getConnection(jdbcUrl, username, password);
            String query = "INSERT INTO students (name, roll_number, course) VALUES (?, ?, ?)";
            PreparedStatement statement = conn.prepareStatement(query);
            statement.setString(1, name);
            statement.setString(2, rollNumber);
            statement.setString(3, course);
            int rowsInserted = statement.executeUpdate();
            if (rowsInserted > 0) 
            {
                PrintWriter out = response.getWriter();
                out.println("Student details stored in the database successfully!");
            }
            statement.close();
            conn.close();
        } 
        catch (SQLException e) 
        {
            e.printStackTrace();
            PrintWriter out = response.getWriter();
            out.println("Error: Failed to store student details in the database.");
        }
    }
}
