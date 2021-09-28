package com.Usuarios.serviceusuarios.services;

import com.Usuarios.serviceusuarios.entities.Rol;
import com.Usuarios.serviceusuarios.enums.RolNombre;

public interface RolService {

    Rol save(Rol rol);
    Rol findBynombre(RolNombre rolNombre) throws Exception;
}
