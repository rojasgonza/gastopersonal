const { where } = require('sequelize/types');
const Salidas = require('../models/salida')
//renderizar gasto antes de enviar
exports.nuevaSalida = async (req, res) => {
  
        const { detalle, monto, tipogastoId } = req.body;
        const salida = await Salidas.create({ detalle, monto,tipogastoId });
        res.send({'mensaje': 'enviado'  });
    }

exports.mostrarSalidas = async(req,res) =>
{  
    const salida = await Salidas.findAll({    include: [
        {
            association: Salidas.tipoGastos
        }
    ]});

    if (!salida) {
        console.log(error);
        next();
    }
    res.json(salida);
  
    }
exports.editarSalida = async (req,res) => {
const salidasPromise = Salidas.findAll();
const salidaPromise = Salidas.findOne({
    where: {
        id: req.params.id
    }
});
const [Salidas, Salida]  =   await Promise.all([salidasPromise, salidaPromise]);
}