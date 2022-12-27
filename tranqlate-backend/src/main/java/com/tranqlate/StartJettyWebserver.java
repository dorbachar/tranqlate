package com.tranqlate;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.servlet.ServletHandler;

import com.tranqlate.controllers.TranslationsController;

public class StartJettyWebserver {

    public static void main(String[] args) throws Exception {
        Server server = new Server(8082);

        ServletHandler handler = new ServletHandler();
        handler.addServletWithMapping(TranslationsController.class, "/*");

            // fake row
        server.setHandler(handler);
        server.start();
        server.join();

    }
}