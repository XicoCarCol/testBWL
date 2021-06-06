package com.pruebabwl.repositories;

import com.pruebabwl.entities.Usuarios;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface UsuarioRepository extends Repository<Usuarios, Integer> {

    List<Usuarios> findAll();

    Usuarios save(Usuarios usuarios);

    void deleteById(Usuarios usuarios);
}
