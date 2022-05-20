const Sequelize = require('sequelize');

const db = require('../config/db');

const tipoGastos = db.define('tipogastos',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING
    }
})

module.exports = tipoGastos;