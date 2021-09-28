package com.Usuarios.serviceusuarios.Jwt;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class EntryPointJWT implements AuthenticationEntryPoint {
    private final static Logger logger = LoggerFactory.getLogger(EntryPointJWT.class);

    @Override
    public void commence(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AuthenticationException e) throws IOException, ServletException {
        logger.error("Error en metodo commence");
        httpServletResponse.sendError(HttpServletResponse.SC_UNAUTHORIZED, "No autorizado.");
    }
}
