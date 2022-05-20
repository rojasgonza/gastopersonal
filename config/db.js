const { Sequelize } = require('sequelize');


// Option 3: Passing parameters separately (other dialects)
const db = new Sequelize('sistemas', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: '3306'
});

module.exports = db;