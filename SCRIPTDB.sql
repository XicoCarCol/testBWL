/*SCRIPT PARA LA BASE DE DATOS*/

create database pruebaBwl; /*Crea base de datos*/
use pruebaBwl; /*se ocupa la base dedatos*/


create table Usuarios(
id_usuario int NOT NULL AUTO_INCREMENT,
correo varchar(100) NOT NULL,
passUno varchar(20) NOT NULL,
passDos varchar(20) NOT NULL,
nombre varchar(100) NOT NULL,
ultimoLogin datetime NOT NULL,
fechaReg datetime NOT NULL,
PRIMARY KEY ( id_usuario ));




