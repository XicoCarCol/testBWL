package com.Usuarios.serviceusuarios.inserts;

import com.Usuarios.serviceusuarios.entities.Rol;
import com.Usuarios.serviceusuarios.entities.Tarea;
import com.Usuarios.serviceusuarios.entities.Usuario;
import com.Usuarios.serviceusuarios.enums.RolNombre;
import com.Usuarios.serviceusuarios.services.RolService;
import com.Usuarios.serviceusuarios.services.TareaService;
import com.Usuarios.serviceusuarios.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Component
public class InsertUser implements CommandLineRunner {

    @Autowired
    private RolService rolService;

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private TareaService tareaService;

    @Override
    public void run(String... args) throws Exception {
        List<String> tareas = new ArrayList<>();
        tareas.add("Terminar prueba");
        tareas.add("Debuggear código");
        tareas.add("Realizar pruebas unitarias");
        Rol rolAdmin = new Rol(RolNombre.ROL_ADMIN);
        Rol rolUser = new Rol(RolNombre.ROL_USER);
        Set<Rol> roles = new HashSet<>();
        roles.add(rolService.save(rolAdmin));
        roles.add(rolService.save(rolUser));
        Usuario usuario = new Usuario("Administrador", "admin@admin.com", "admin");
        usuario.setRoles(roles);
        Usuario reg = usuarioService.save(usuario);
        tareas.forEach(t -> {
            Tarea tarea = new Tarea(reg.getId(), t, true);
            tareaService.save(tarea);
        });
    }
}
