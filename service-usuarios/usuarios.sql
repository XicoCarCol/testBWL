drop database dbusuarios;
drop user usuarios;
create user usuarios with password 'usuarios';
create database dbusuarios with template=template0 owner=usuarios;