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
require('./models/salida');

const cors = require('cors')
const app = express();
//habilitar bodyParser para lectura de datos
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

db.sync()
    .then(()=>console.log('conectado'))
    .catch(error=>console.log(error));

//crear app en express

app.use(cors());

//router
app.use('/', routes());
// Habilitar cors


app.listen(5000);