package com.Usuarios.serviceusuarios.services;

import com.Usuarios.serviceusuarios.entities.Usuario;

public interface UsuarioService {

    Usuario save(Usuario usuario) throws Exception;

    Usuario update(Usuario usuario);

    boolean updateLogin(String correo);

    boolean existsCorreo(String correo);

    Usuario findByCorreo(String correo) throws Exception;
}
