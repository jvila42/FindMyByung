//all html buttons come here


import javax.servlet.http.*;
import javax.servlet.*;
import  java.io.IOException;


public class Buttons {

	//@Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        speechToText spt = new speechToText();

        if (request.getParameter("button1") != null) {
            spt.method1();
        } else if (request.getParameter("button2") != null) {
            spt.method2();
        } else if (request.getParameter("button3") != null) {
            spt.method3();
        } else {
            // ???
        }
        request.getRequestDispatcher("/WEB-INF/some-result.jsp").forward(request, response);
    }	
}
