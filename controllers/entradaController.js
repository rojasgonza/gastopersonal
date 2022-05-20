const Entradas = require('../models/entrada')
//renderizar gasto antes de enviar
exports.nuevaEntrada = async (req, res) => {
  
        const { detalle, monto, tipoentradaId } = req.body;
        const entrada = await Entradas.create({ detalle, monto,tipoentradaId });
        res.send({'mensaje': 'enviado'  });
    }

exports.mostrarEntradas = async(req,res) =>
{  
    const entrada = await Entradas.findAll({    include: [
        {
            association: Entradas.tipoEntradas
        }
    ]});

    if (!entrada) {
        console.log(error);
        next();
    }
    res.json(entrada);
  
    }