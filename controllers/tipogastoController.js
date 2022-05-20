const tipoGastos = require('../models/tipogasto')
//renderizar gasto antes de enviar
exports.nuevoTipogasto = async (req, res) => {
  
        const { nombre } = req.body;
        const tipogasto = await tipoGastos.create({ nombre });
        res.send('/');
    }
