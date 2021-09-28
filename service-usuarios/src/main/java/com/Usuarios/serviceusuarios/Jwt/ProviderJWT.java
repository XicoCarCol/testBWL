package com.Usuarios.serviceusuarios.Jwt;

import com.Usuarios.serviceusuarios.entities.UsuarioLogeo;

import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class ProviderJWT {


    private final static Logger logger = LoggerFactory.getLogger(ProviderJWT.class);

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.expiration}")
    private int expiration;

    public String generateToken(Authentication authentication){
        UsuarioLogeo usuarioLogin = (UsuarioLogeo) authentication.getPrincipal();
        return Jwts.builder().setSubject(usuarioLogin.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + expiration * 1000))
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }

    public String getNombreUsuarioFromToken(String token){
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getSubject();
    }

    public boolean validateToken(String token){
        try {
            Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
            return true;
        }catch (MalformedJwtException e){
            logger.error("Mal formado");
        }catch (UnsupportedJwtException e){
            logger.error("No soportado");
        }catch (ExpiredJwtException e){
            logger.error("Expirado");
        }catch (IllegalArgumentException e){
            logger.error("Vacio");
        }catch (SignatureException e){
            logger.error("Error en la firma");
        }
        return false;
    }
}
