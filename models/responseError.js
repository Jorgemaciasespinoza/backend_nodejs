// ==================================================
//  MODELO DE RESPUESTA PARA ERRORES
//  responseError.js
//  Fecha de creación: 11/08/2018
//  Ultima actualización: 
//  Autor: Jorge Macías
//  Descripción: Modelo de respuesta de errores
// ==================================================

'use strict'

module.exports = class Response {

    constructor( status, mensajeUsuario, mensajeTecnico, code ){
        this.status = status;
        this.mensajeUsuario = mensajeUsuario;
        this.mensajeTecnico = mensajeTecnico;
        this.code = code;
    }

    setStatus( status ){
        this.status = status;
    }

    getStatus(){
        return this.status;
    }

    setMensajeUsuario( mensajeUsuario ){
        this.mensajeUsuario = mensajeUsuario;
    }

    getMensajeUsuario( mensajeUsuario ){
        this.mensajeUsuario = mensajeUsuario;
    }

    setMensajeTecnico( mensajeTecnico ){
        this.mensajeTecnico = mensajeTecnico;
    }

    getMensajeTecnico( mensajeTecnico ){
        this.mensajeTecnico = mensajeTecnico;
    }

    setCode( code ){
        this.code = code;
    }

    getCode(){
        return this.code;
    }

}