const { Console } = require('console');
const express = require('express');
const app = express();



//IMPORTAR LA CONEXION CON LA BASE DEDATOS MONGOBD
const archivoBD = require('./conexionBD');

//CONFIGURACION DE LAS RUTAS DESDE EL BACKEND

app.get('/', (req,res) => {
    res.end('Funciono pa');
});

//CONFIGURACION DEL SERVIDOR BACKEND
app.listen(8080, function(){
    console.log('El servidor corre de manera correcta en el puerto 8080');
});


