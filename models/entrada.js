const Sequelize = require('sequelize');
const tipoEntradas = require('./tipoentrada');
const db = require('../config/db');

const Entradas = db.define('entrada',{
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
Entradas.tipoEntradas = Entradas.belongsTo(tipoEntradas);

module.exports = Entradas;