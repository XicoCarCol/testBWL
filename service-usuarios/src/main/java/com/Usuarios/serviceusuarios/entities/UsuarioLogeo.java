package com.Usuarios.serviceusuarios.entities;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class UsuarioLogeo  implements UserDetails {

    private String nombre;
    private String correo;
    private String password;
    private Collection<? extends GrantedAuthority> authorities;


    public UsuarioLogeo(String nombre, String correo, String password, Collection<? extends GrantedAuthority> authorities) {
        this.nombre = nombre;
        this.correo = correo;
        this.password = password;
        this.authorities = authorities;
    }

    public static UsuarioLogeo build(Usuario usuario){
        List<GrantedAuthority> authorities = usuario.getRoles().stream().map(rol ->
                new SimpleGrantedAuthority(rol.getRolNombre().name())).collect(Collectors.toList());
        return new UsuarioLogeo(usuario.getNombre(), usuario.getCorreo(), usuario.getPassword(), authorities);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return correo;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
