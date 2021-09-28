package com.Usuarios.serviceusuarios.services.Impl;

import com.Usuarios.serviceusuarios.entities.Tarea;
import com.Usuarios.serviceusuarios.entities.Usuario;
import com.Usuarios.serviceusuarios.repositories.Usuarios;
import com.Usuarios.serviceusuarios.services.TareaService;
import com.Usuarios.serviceusuarios.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private Usuarios usuariosRepository;

    @Autowired
    private TareaService tareService;

    @Override
    public Usuario save(Usuario usuario) throws Exception {
        Optional<Usuario> optionalUsuario = usuariosRepository.findByCorreo(usuario.getCorreo());
        if (!optionalUsuario.isPresent()) {
            List<String> tareas = new ArrayList<>();
            tareas.add("Ir al banco");
            tareas.add("Revisar balance general");
            tareas.add("Ajustar métricas de diseño");
            String hashedPassWord = BCrypt.hashpw(usuario.getPassword(), BCrypt.gensalt(10));
            usuario.setPassword(hashedPassWord);
            usuario.setCreated(new Date());
            Usuario usuario1 = usuariosRepository.save(usuario);
            tareas.forEach(tarea -> {
                Tarea tareas1 = new Tarea(usuario1.getId(), tarea, true);
                tareService.save(tareas1);
            });
            return  usuario;
        }else {
            throw  new Exception("Intenta ingresar otro correo");
        }
    }

    @Override
    public Usuario update(Usuario usuario) {
        usuario.setUpdated(new Date());
        usuario = usuariosRepository.save(usuario);
        return usuario;
    }


    @Override
    public boolean updateLogin(String correo) {
        Optional<Usuario> optionalUsuario = usuariosRepository.findByCorreo((correo));
        if (optionalUsuario.isPresent()) {
            Usuario usuario = optionalUsuario.get();
            usuario.setLogin((new Date()));
            usuariosRepository.save(usuario);
            Tarea tarea = tareService.findByDescripcion(usuario.getId(), "Iniciar Sesión");
            if (tarea != null) {
                tarea.setActivo(false);
                tareService.update(tarea);

            }
        return  true;
        }
        return false;
    }

    @Override
    public boolean existsCorreo(String correo) {
        return usuariosRepository.existsByCorreo(correo);
    }

    @Override
    public Usuario findByCorreo(String correo) throws Exception {
        Optional<Usuario> usuario = usuariosRepository.findByCorreo(correo);
        if (usuario.isPresent()) {
            return  usuario.get();
        }else {
            throw new Exception("No se encontro usuario");
        }
    }
}
