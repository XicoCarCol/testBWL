package com.pruebabwl.services;

import com.pruebabwl.entities.Usuarios;

import java.util.List;

public interface UsuarioService {

    List<Usuarios> page();
    Usuarios add(Usuarios usuarios);

}
