const express = require('express');
const router = express.Router();
const tipogastoController = require('../controllers/tipogastoController')

module.exports = function(){

    router.post('/nuevotgasto', tipogastoController.nuevoTipogasto);
    return router;

}