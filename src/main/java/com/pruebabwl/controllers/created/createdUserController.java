package com.pruebabwl.controllers.created;

import com.pruebabwl.entities.Usuarios;
import com.pruebabwl.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/create"})
public class createdUserController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Usuarios> save(@RequestBody Usuarios usuarios) {
        Usuarios usuarios1 = usuarioService.add(usuarios);
        return new ResponseEntity<Usuarios>(usuarios1, HttpStatus.OK);
    }
}
