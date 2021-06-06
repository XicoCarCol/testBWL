package com.pruebabwl.controllers.show;


import com.pruebabwl.entities.Usuarios;
import com.pruebabwl.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

//@CrossOrigin()
@RestController
@RequestMapping({"/user"})
public class UsuariosController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/getUser")
    public List<Usuarios> page() {
        return usuarioService.page();
    }

}
