const {Eventos} = require("../../db.js")

const getEvento = async (req, res) =>{
    try{
        const oneEventoDB = await Eventos.findByPk(req.params.id)
        const oneEvento = {
            id: oneEventoDB.id,
            tipo_de_evento: oneEventoDB.tipo_de_evento,
            horarios: oneEventoDB.horarios,
            club: oneEventoDB.club,
            direccion: oneEventoDB.direccion,
            imagen: oneEventoDB.imagen
        }
        return res.status(200).json(oneEvento)
    }catch(error){
        return res.status(400).send(error.message)
    }
}
module.exports = getEvento