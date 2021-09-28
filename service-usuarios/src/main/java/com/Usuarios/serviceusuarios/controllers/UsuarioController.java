package com.Usuarios.serviceusuarios.controllers;

import com.Usuarios.serviceusuarios.entities.Usuario;
import com.Usuarios.serviceusuarios.repositories.Usuarios;
import com.Usuarios.serviceusuarios.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin()
@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;
    @Autowired
    private Usuarios usuariosRepository;


    @GetMapping("/mostrarPorCorreo/{correo}")
    public ResponseEntity<Usuario> mostrarUsuario(@PathVariable("correo") String correo) throws Exception{
       Usuario usuario = usuarioService.findByCorreo(correo);
       return new ResponseEntity<>(usuario, HttpStatus.OK);
    }


    @GetMapping("/mostrarTodos")
    public List<Usuario> mostrarUsuarios(){
        return usuariosRepository.findAll();
    }

}
