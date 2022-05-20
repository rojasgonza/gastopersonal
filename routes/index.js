const express = require('express');
const router = express.Router();
const tipogastoController = require('../controllers/tipogastoController')
const tipoentradaController = require('../controllers/tipoentradaController');
const entradaController = require('../controllers/entradaController');
const salidaController = require('../controllers/salidaController');
module.exports = function(){
    // tipo gastos
    router.post('/nuevotgasto', tipogastoController.nuevoTipogasto);
    router.get('/tipogasto', tipogastoController.mostrarTgasto);
    router.put('/tipogasto/editar/:tGastoid', tipogastoController.editarTGasto);
    router.delete('/tipogasto/borrar/:tGastoid', tipogastoController.borrarTgasto);


    // tipo entradas
    router.post('/nuevotentrada', tipoentradaController.nuevoTipoentrada);
    router.get('/tipoentradas', tipoentradaController.mostrarTEntradas);
    router.put('/tipoentradas/editar/:tEntradaid', tipoentradaController.editarTEntrada);
    router.delete('/tipoentradas/borrar/:tEntradaid', tipoentradaController.borrarTEntrada);


    
    // entradas
    router.post('/nuevaentrada', entradaController.nuevaEntrada);
    router.get('/entradas', entradaController.mostrarEntradas);
    router.put('/entradas/editar/:Entradaid', entradaController.editarEntrada);
    router.delete('/entradas/borrar/:Entradaid', entradaController.borrarEntrada);
 
 
    // salidas
    router.post('/nuevasalida', salidaController.nuevaSalida);
    router.get('/salidas', salidaController.mostrarSalidas);
    router.put('/salidas/editar/:Salidaid', salidaController.editarSalida);
    router.delete('/salidas/borrar/:Salidaid', salidaController.borrarSalida);

    
    return router;

}
// mostrarTEntradas tEntradaid