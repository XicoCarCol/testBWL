package com.Usuarios.serviceusuarios.DTOS;

public class MensajeErrorDTO {
    private String mensaje;

    public MensajeErrorDTO(String mensaje) {
        this.mensaje = mensaje;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }
}
