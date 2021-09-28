package com.Usuarios.serviceusuarios.repositories;

import com.Usuarios.serviceusuarios.entities.Rol;
import com.Usuarios.serviceusuarios.enums.RolNombre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface Roles extends JpaRepository<Rol, Long> {

    Optional<Rol> findByRolNombre(RolNombre rolNombre);
}
