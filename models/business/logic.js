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
var ResposeError = require('../responseError');

module.exports.getMessaje = function (req, res, next){

    req.getConnection(function(err, connection) {
      
        if (err) {
            var error 
                = new ResposeError
                    ('500','Error en el servidor, intente más tarde', err.code, '1000');
            err.responseError = error;
            return next(err);
        } 
        
        connection.query('SELECT mensaje from test1 where pk_test = ?', [1], function(err, results) {
            if (err) {
                var error 
                    = new ResposeError('500','Error en el servidor, intente más tarde', err.code, '1001');
                err.responseError = error;
                return next(err);
            }
              
            var objMensaje = new Mensaje();
            var objResponse = new Response();
  
            objMensaje.setMensaje(results[0].mensaje);
          
            objResponse.setOk(true);
            objResponse.setObject(objMensaje);
  
            res
                .status(200)
                .json(objResponse);
        });
      
    });
}

