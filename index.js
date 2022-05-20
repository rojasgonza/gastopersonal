const express = require('express');
const routes = require('./routes')
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./config/db');
//helpers
const helpers = require('./helpers');
//importacion de modelos
require('./models/tipogasto');
require('./models/tipoentrada');
require('./models/entrada');

const cors = require('cors')


db.sync()
    .then(()=>console.log('conectado'))
    .catch(error=>console.log(error));

//crear app en express
const app = express();

//habilitar bodyParser para lectura de datos
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//router
app.use('/', routes());
// Habilitar cors
app.use(cors());

app.listen(5000);