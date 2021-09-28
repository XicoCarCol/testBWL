package com.Usuarios.serviceusuarios.services.Impl;

import com.Usuarios.serviceusuarios.entities.Usuario;
import com.Usuarios.serviceusuarios.entities.UsuarioLogeo;
import com.Usuarios.serviceusuarios.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UsuarioLogServiceImpl implements UserDetailsService {

    @Autowired
    private UsuarioService usuarioService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = null;
        try{
            usuario = usuarioService.findByCorreo(username);
        }catch (Exception e){
            e.printStackTrace();

        }
        return UsuarioLogeo.build(usuario);
    }
}
