package com.Usuarios.serviceusuarios.services.Impl;

import com.Usuarios.serviceusuarios.entities.Rol;
import com.Usuarios.serviceusuarios.enums.RolNombre;
import com.Usuarios.serviceusuarios.repositories.Roles;
import com.Usuarios.serviceusuarios.services.RolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RolServiceImpl implements RolService {

    @Autowired
    private Roles rolesRepository;

    @Override
    public Rol save(Rol rol) {
        return rolesRepository.save(rol);
    }

    @Override
    public Rol findBynombre(RolNombre rolNombre) throws Exception {
        Optional<Rol> optionalRol = rolesRepository.findByRolNombre(rolNombre);
        if (optionalRol.isPresent()) {
            return optionalRol.get();
        }else {
            throw new Exception("Rol no encontrado");
        }
    }
}
