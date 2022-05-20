const tipoEntradas = require('../models/tipoentrada')
//renderizar gasto antes de enviar
exports.nuevoTipoentrada = async (req, res) => {
  
        const { nombre } = req.body;
        const tipoentrada = await tipoEntradas.create({ nombre });
        res.send({'mensaje': 'enviado'  });
    }
