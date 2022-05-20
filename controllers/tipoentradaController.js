const tipoEntradas = require('../models/tipoentrada')
//renderizar gasto antes de enviar
exports.nuevoTipoentrada = async (req, res) => {
  
        const { nombre } = req.body;
        const tipoentrada = await tipoEntradas.create({ nombre });
        res.send({'mensaje': 'enviado'  });
    }
    
exports.mostrarTEntradas = async (req, res) => {
        const tipoentrada = await tipoEntradas.findAll({});
    
        if (!tipoentrada) {
            console.log(error);
            next();
        }
        res.json(tipoentrada);
    
    }

    exports.editarTEntrada = async (req, res) => {
        let condition =  {where: {id: req.params.tEntradaid}}; 
         const tipoentrada = await tipoEntradas.update(
             { nombre: req.body.nombre},
             condition);
         res.send({ 'mensaje': 'cambiado' });
     }