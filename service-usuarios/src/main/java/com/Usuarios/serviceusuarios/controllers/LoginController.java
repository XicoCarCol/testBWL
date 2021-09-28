package com.Usuarios.serviceusuarios.controllers;

import com.Usuarios.serviceusuarios.DTOS.JWTDTO;
import com.Usuarios.serviceusuarios.DTOS.MensajeErrorDTO;
import com.Usuarios.serviceusuarios.DTOS.UsuarioDTO;
import com.Usuarios.serviceusuarios.Jwt.ProviderJWT;
import com.Usuarios.serviceusuarios.entities.Rol;
import com.Usuarios.serviceusuarios.entities.Usuario;
import com.Usuarios.serviceusuarios.enums.RolNombre;
import com.Usuarios.serviceusuarios.services.RolService;
import com.Usuarios.serviceusuarios.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@CrossOrigin()
@RestController
@RequestMapping("/seguridad")
public class LoginController {
    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private RolService rolService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private ProviderJWT jwtProvider;


    @PostMapping("/registrar")
    public ResponseEntity<?> registrar(@RequestBody UsuarioDTO usuarioDTO) throws Exception {
        if (usuarioService.existsCorreo(usuarioDTO.getEmail())) {
            return new ResponseEntity<>(new MensajeErrorDTO("Ya existe un usuario con ese correo."), HttpStatus.BAD_REQUEST);
        }
        Usuario usuario = new Usuario(usuarioDTO.getNombre(), usuarioDTO.getEmail(), usuarioDTO.getPassword());
        Set<Rol> rols = new HashSet<>();
        rols.add(rolService.findBynombre(RolNombre.ROL_USER));
        if (usuarioDTO.getRoles() != null && usuarioDTO.getRoles().contains("admin")) {
            rols.add(rolService.findBynombre(RolNombre.ROL_ADMIN));
        }
        usuario.setRoles(rols);
        usuarioService.save(usuario);
        return new ResponseEntity<>(new MensajeErrorDTO("Usuario registrado."), HttpStatus.OK);
    }

    @PostMapping("/ingresar")
    public ResponseEntity<JWTDTO> ingresar(@RequestBody UsuarioDTO usuarioDTO) throws Exception {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(usuarioDTO.getEmail(), usuarioDTO.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwtToken = jwtProvider.generateToken(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        JWTDTO jwtdto = new JWTDTO(jwtToken, userDetails.getUsername(), userDetails.getAuthorities());
        usuarioService.updateLogin(usuarioDTO.getEmail());
        return new ResponseEntity<>(jwtdto, HttpStatus.OK);
    }

}
