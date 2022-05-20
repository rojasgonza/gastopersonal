const Sequelize = require('sequelize');
const tipoGastos = require('./tipogasto');
const db = require('../config/db');

const Salidas = db.define('salida',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    detalle: {
        type: Sequelize.STRING
    },
    monto:{
        type: Sequelize.DECIMAL(10,2)
    }

});
Salidas.tipoGastos = Salidas.belongsTo(tipoGastos);

module.exports = Salidas;