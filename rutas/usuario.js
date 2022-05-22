const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { ObjectId } = Schema;
//CREAMOS EL EQUEMA USUARIO EN NUESTRE BASE DEDATOS MONGOBD
const usuarioSchema = new Schema({
    idusuario: { type: String },
    nombre: { type: String },
    email: { type: String },
    telefono: { type: String },
});


const modeloUsuario = model('Usuario', usuarioSchema);
module.exports = router;

router.get('/ejemplo', (req, res) => {
    res.end('Hola juan ejemplo')
})

//RUTAS DE ACCESO

//EN ESTE PRIMER POST ES DONDE LLEGA LA INFORMACION PROVENIENTE DE ./rutas/usuario.js
router.post('/agregarusuario', (req, res) => {
    const nuevoUsuario = new modeloUsuario({
        idusuario: req.body.idusuario,
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono
    });
    //DESPUES DE CAPTURAR LOS DATOS SE PROCEDE A SER GUARDADOS EN LA BASE DE DATOS MONGODB
    nuevoUsuario.save(function (err) {
        if (!err) {
            res.send('Se agrego al usuario');
        }else{
            res.send(err);
        }

    })
})
