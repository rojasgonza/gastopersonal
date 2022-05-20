const tipoGastos = require('../models/tipogasto')
//renderizar gasto antes de enviar
exports.nuevoTipogasto = async (req, res) => {
  
        const { nombre } = req.body;
        const tipogasto = await tipoGastos.create({ nombre });
        res.send('/');
    }

    exports.mostrarTgasto = async (req, res) => {
        const tipogasto = await tipoGastos.findAll({});
    
        if (!tipogasto) {
            console.log(error);
            next();
        }
        res.json(tipogasto);
    
    }

    exports.editarTGasto = async (req, res) => {
        let condition =  {where: {id: req.params.tGastoid}}; 
         const tipogasto = await tipoGastos.update(
             { nombre: req.body.nombre},
             condition);
         res.send({ 'mensaje': 'cambiado' });
     }