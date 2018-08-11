// ==================================================
//  RUTA TEMPLATE
//  appRoute.js
//  Fecha de creación: 11/08/2018
//  Ultima actualización: 
//  Autor: Jorge Macías
//  Descripción: Template de rutas 
// ==================================================

'use strict'

// REQUIRES
// ==================================================
var express = require('express');

// IMPORTS
// ==================================================
var logicApp = require('../models/business/logic').getMessaje;

// INICIALIZAR VARIABLES
// ==================================================
var subApp = express()


// OPERACIONES
// ==================================================
subApp.get('/', logicApp);


// EXPORT SUBAPP
// ==================================================
module.exports = subApp;
