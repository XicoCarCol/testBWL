package com.pruebabwl.controllers.created;

import com.pruebabwl.entities.Usuarios;
import com.pruebabwl.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@CrossOrigin()
@RestController
@RequestMapping({"/login"})
public class createdUserController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/registrar")
    public ResponseEntity<Usuarios> save(@RequestBody Usuarios usuarios) throws Exception {
        Usuarios usuarios1 = usuarioService.add(usuarios);
        return new ResponseEntity<Usuarios>(usuarios1, HttpStatus.OK);
    }
}
