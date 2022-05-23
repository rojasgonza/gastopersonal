const Entradas = require('../models/entrada')
//renderizar gasto antes de enviar
exports.nuevaEntrada = async (req, res) => {
  
        const { detalle, monto, tipoentradaId } = req.body;
        const entrada = await Entradas.create({ detalle, monto,tipoentradaId });
        res.json({'mensaje': 'enviado'  });
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
    exports.editarEntrada = async (req, res) => {
        let condition =  {where: {id: req.params.Entradaid}}; 
         const entrada = await Entradas.update(
             { detalle: req.body.detalle ,
             monto: req.body.monto,
             tipoentradaId: req.body.tipoentradaId},
             condition);
         res.send({ 'mensaje': 'cambiado entrada' });
     }    
     exports.borrarEntrada = async (req,res) => {
        let condition = {where: {id: req.params.Entradaid}};
        const entrada = await Entradas.destroy(condition);
        res.send({'mensaje': 'eliminado'})
    }