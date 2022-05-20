const express = require('express');
const router = express.Router();
const tipogastoController = require('../controllers/tipogastoController')
const tipoentradaController = require('../controllers/tipoentradaController');
const entradaController = require('../controllers/entradaController');
module.exports = function(){

    router.post('/nuevotgasto', tipogastoController.nuevoTipogasto);
    router.post('/nuevotentrada', tipoentradaController.nuevoTipoentrada);
    router.post('/nuevaentrada', entradaController.nuevaEntrada);
    router.get('/entradas', entradaController.mostrarEntradas)
    
    return router;

}