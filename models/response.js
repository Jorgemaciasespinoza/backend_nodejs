// ==================================================
//  MODELO DE RESPUESTA
//  response.js
//  Fecha de creación: 11/08/2018
//  Ultima actualización: 
//  Autor: Jorge Macías
//  Descripción: Modelo de respuesta
// ==================================================

'use strict'

module.exports = class Response {

    constructor( ok, object ){
        this.ok = ok;
        this.object = object;
    }

    setOk( status ){
        this.ok = status;
    }

    getOk(){
        return this.ok;
    }

    setObject( object ){
        this.object = object;
    }

    getOk(){
        return this.object;
    }

}