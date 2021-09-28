package com.Usuarios.serviceusuarios.services;

import com.Usuarios.serviceusuarios.entities.Tarea;

import java.util.List;

public interface TareaService {

    Tarea save(Tarea tarea);
    Tarea update(Tarea tarea);
    Tarea findByDescripcion(Long idUsuario, String descripcion);
    List<Tarea> findByUsuario(Long idUsuario);
}
