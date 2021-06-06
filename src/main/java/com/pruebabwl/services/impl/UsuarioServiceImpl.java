package com.pruebabwl.services.impl;

import com.pruebabwl.entities.Usuarios;
import com.pruebabwl.repositories.UsuarioRepository;
import com.pruebabwl.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public List<Usuarios> page() {
        return usuarioRepository.findAll();
    }

    @Override
    public Usuarios add(Usuarios usuarios) {
        return usuarioRepository.save(usuarios);
    }
}
