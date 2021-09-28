package com.Usuarios.serviceusuarios.repositories;

import com.Usuarios.serviceusuarios.entities.Tarea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface Tareas extends JpaRepository<Tarea, Long> {

    List<Tarea> findByIdUsuario(Long id);
    Optional<Tarea> findByIdUsuarioAndDescripcionAndActivoTrue(Long id, String desc);
}
