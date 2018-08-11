// ==================================================
//  MAIN
//  app.js
//  Fecha de creación: 11/08/2018
//  Ultima actualización: 
//  Autor: Jorge Macías
//  Descripción: Index del backend server. 
// ==================================================

'use strict'

// REQUIRES
// ==================================================
var express = require('express')


// IMPORTS
// ==================================================
var appRoute = require('./routes/appRoute');


// INICIALIZAR VARIABLES
// ==================================================
var app = express()


// MIDDLEWARES
// ==================================================

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
  })

// RUTAS
app.use('/app', appRoute);


// ESCUCHAR PETICIONES
// ==================================================
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
})