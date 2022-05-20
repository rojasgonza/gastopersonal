const Salidas = require('../models/salida')
//renderizar gasto antes de enviar
exports.nuevaSalida = async (req, res) => {

    const { detalle, monto, tipogastoId } = req.body;
    const salida = await Salidas.create({ detalle, monto, tipogastoId });
    res.send({ 'mensaje': 'enviado' });
}

exports.mostrarSalidas = async (req, res) => {
    const salida = await Salidas.findAll({
        include: [
            {
                association: Salidas.tipoGastos
            }
        ]
    });

    if (!salida) {
        console.log(error);
        next();
    }
    res.json(salida);

}
 exports.editarSalida = async (req, res) => {
    let condition =  {where: {id: req.params.Salidaid}}; 
     const salida = await Salidas.update(
         { detalle: req.body.detalle ,
         monto: req.body.monto,
         tipogastoId: req.body.tipogastoId},
         condition);
     res.send({ 'mensaje': 'cambiado' });
 }
 exports.borrarSalida = async (req,res) => {
    let condition = {where: {id: req.params.Salidaid}};
    const salida = await Salidas.destroy(condition);
    res.send({'mensaje': 'eliminado'})
}