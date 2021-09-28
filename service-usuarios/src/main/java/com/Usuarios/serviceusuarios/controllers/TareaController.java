package com.Usuarios.serviceusuarios.controllers;

import com.Usuarios.serviceusuarios.entities.Tarea;
import com.Usuarios.serviceusuarios.services.TareaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin()
@RestController
@RequestMapping("/tarea")
public class TareaController {

    @Autowired
    private TareaService tareaService;


    @GetMapping("/mostrarId/{idUsuario}")
    public ResponseEntity<List<Tarea>> muestraTarea(@PathVariable("idUsuario") Long id) throws Exception {
        List<Tarea> tareas = tareaService.findByUsuario(id);
        return new ResponseEntity<>(tareas, HttpStatus.OK);
    }
}
