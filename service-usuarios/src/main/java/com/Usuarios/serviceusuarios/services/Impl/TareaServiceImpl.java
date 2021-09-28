package com.Usuarios.serviceusuarios.services.Impl;

import com.Usuarios.serviceusuarios.entities.Tarea;
import com.Usuarios.serviceusuarios.repositories.Tareas;
import com.Usuarios.serviceusuarios.services.TareaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class TareaServiceImpl implements TareaService {


    @Autowired
    private Tareas tareasRepository;

    @Override
    public Tarea save(Tarea tarea) {
        tarea.setCreated(new Date());
        tarea = tareasRepository.save(tarea);
        return tarea;
    }

    @Override
    public Tarea update(Tarea tarea) {
        tarea.setUpdated(new Date());
        tarea = tareasRepository.save(tarea);
        return tarea;
    }

    @Override
    public Tarea findByDescripcion(Long idUsuario, String descripcion) {
        Optional<Tarea> optionalTarea = tareasRepository.findByIdUsuarioAndDescripcionAndActivoTrue(idUsuario, descripcion);
        if (optionalTarea.isPresent()) {
            return optionalTarea.get();
        }
        return null;

    }

    @Override
    public List<Tarea> findByUsuario(Long idUsuario) {
        return tareasRepository.findByIdUsuario(idUsuario);
    }
}
