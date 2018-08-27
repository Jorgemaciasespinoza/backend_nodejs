// ==================================================
//  MANEJADOR DE ERRORES
//  handle.js
//  Fecha de creación: 11/08/2018
//  Ultima actualización: 
//  Autor: Jorge Macías
//  Descripción: Maneja los errores
// ==================================================

'use strict'

module.exports.errorHandler = function(err, req, res, next) {

    // console.error(err); evitar funciones asincronas
    if (err.object.status == '500') {
        res
            .status(500)
            .json(err);
    }

}