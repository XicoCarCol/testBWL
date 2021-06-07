/*SCRIPT PARA LA BASE DE DATOS*/

Datos de DB:
nombre: pruebabwl
user: root
pass: root
direccion: localhost:3306

Al igual nos entrega toda la información sobre el applications properties del backend.

create database pruebaBwl; /*Crea base de datos*/

use pruebaBwl; /*se ocupa la base dedatos*/

/*Se crea la tabla*/
create table usuarios
(
    id_usuario   int          NOT NULL AUTO_INCREMENT,
    correo       varchar(100) NOT NULL,
    pass_uno     varchar(20)  NOT NULL,
    pass_dos     varchar(20)  NOT NULL,
    nombre       varchar(100) NOT NULL,
    ultimo_login datetime     NOT NULL,
    fecha_reg    datetime     NOT NULL,
    PRIMARY KEY (id_usuario)
);




