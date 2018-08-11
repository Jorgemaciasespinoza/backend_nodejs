// ==================================================
//  LOGICA DE NEGOCIO
//  logic.js
//  Fecha de creación: 11/08/2018
//  Ultima actualización: 
//  Autor: Jorge Macías
//  Descripción: Logica de la operacion
// ==================================================

'use strict'

module.exports = class Mensaje {

    setMensaje( mensaje ){
        this.mensaje = mensaje;
    }

    getMensaje(){
        return this.mensaje;
    }
}
