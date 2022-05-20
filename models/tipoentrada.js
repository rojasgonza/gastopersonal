const Sequelize = require('sequelize');

const db = require('../config/db');

const tipoEntradas = db.define('tipoentrada',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING
    }
})

module.exports = tipoEntradas;