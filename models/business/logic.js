// ==================================================
//  LOGICA DE NEGOCIO
//  logic.js
//  Fecha de creación: 11/08/2018
//  Ultima actualización: 
//  Autor: Jorge Macías
//  Descripción: Logica de la operacion
// ==================================================

'use strict'

var Mensaje = require('../message');
var Response = require('../response');

module.exports.getMessaje = function (req, res){

    var objMensaje = new Mensaje();
    var objResponse = new Response();
  
    objMensaje.setMensaje('Petición realizada correctamente');
          
    objResponse.setOk(true);
    objResponse.setObject(objMensaje);
  
    res
        .status(200)
        .json(objResponse);
}

