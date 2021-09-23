package com.pruebabwl.entities;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "usuarios")
public class Usuarios {


    @Id
    @Column(name = "id_usuario", unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String correo;
    @Column
    private String passUno;
    @Column
    private String passDos;
    @Column
    private String nombre;
    @Column
    private Date ultimo_login;
    @Column
    private Date fecha_reg;

    public Usuarios(String nombre, String email, String password) {
        this.nombre = nombre;
        this.correo = email;
        this.passUno = password;
    }

    public Usuarios() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getPassUno() {
        return passUno;
    }

    public void setPassUno(String passUno) {
        this.passUno = passUno;
    }

    public String getPassDos() {
        return passDos;
    }

    public void setPassDos(String passDos) {
        this.passDos = passDos;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Date getUltimoLogin() {
        return ultimo_login;
    }

    public void setUltimoLogin(Date ultimoLogin) {
        this.ultimo_login = ultimoLogin;
    }

    public Date getFechaReg() {
        return fecha_reg;
    }

    public void setFechaReg(Date fechaReg) {
        this.fecha_reg = fechaReg;
    }
}
