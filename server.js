const { Console } = require('console');
const express = require('express');
const app = express();


//IMPORTAR LA CONEXION CON LA BASE DE DATOS MONGOBD
const archivoBD = require('./conexionBD');
//IMPORTACION ARCHIVO DE RUTAS Y MODELOS DEL USUARIO
const rutaUsuario = require('./rutas/usuario');

//IMPORTAR BODY PARSER
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'true' }));
//CONFIGURACION DE LAS RUTAS DESDE EL BACKEND
app.use('/api/usuario', rutaUsuario);
//prueba del servido backend
app.get('/', (req, res) => {
    res.end('el servidor backend esta funcionando');
});

//CONFIGURACION DEL SERVIDOR BACKEND
app.listen(8080, function () {
    console.log('El servidor corre de manera correcta en el puerto 8080');
});


