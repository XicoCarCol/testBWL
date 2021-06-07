1.- Se debe ejecutar un clean install, para actualizacion y limpieza de proyecto, ya sea por IDE o  desde linea de comando con MVN
2.- Se ejecuta ya sea con el jar o directo desde el IDE (intellj)
3.- Para el proyecto de backend se trabajo en diferente rama (git), el nombre de la rama es backend
4.-Anexo repositorio directo  https://github.com/XicoCarCol/testBWL.git

5.- Para poder crear registros desde postman ocupar el siguiente JSON, con el endpoint que va directo a backend 
http://localhost:8080/create

{
    "correo": "Caro@hotmail.com",
    "passUno": "1234",
    "passDos": "1234",
    "nombre": "Roberto Barcenas",
    "fechaReg": "2021-06-06T20:54:57.000+00:00",
    "ultimoLogin": "2021-06-06T20:54:57.000+00:00"
}


Este endpoint es para el GET 
http://localhost:8080/user/getUser
