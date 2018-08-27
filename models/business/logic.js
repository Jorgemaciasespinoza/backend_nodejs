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

module.exports.getMessaje = function(req, res, next) {

    var objResponse = new Response();

    getConnection(req)
        .then(connection => exectQry(connection))
        .then((data) => {

            var objMensaje = new Mensaje();
            objMensaje.setMensaje(data);

            objResponse.setOk(true);
            objResponse.setObject(objMensaje);

            res.status(200).json(objResponse);
        })
        .catch((err) => {
            var error = new ResposeError(
                '500',
                'Error en el servidor, intente más tarde',
                err,
                '1001');

            objResponse.setOk(false);
            objResponse.setObject(error);
            return next(objResponse);
        });
}

function getConnection(req) {
    return new Promise((resolve, reject) => {
        req.getConnection(function(err, connection) {
            if (err)
                return reject(err);
            resolve(connection);
        });
    });
}

function exectQry(connection) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT mensaje from tests where pk_test = ?', [1], function(err, results) {
            if (err)
                return reject(err);
            resolve(results[0].mensaje);
        });
    });
}