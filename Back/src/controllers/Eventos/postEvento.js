const { Eventos } = require("../../db.js")
const postEvento = async(res,res) =>{
    try {
        const {
            tipo_de_evento,
            horarios,
            club,
            direccion,
            imagen
        } = req.body;
        
        if(tipo_de_evento && horarios && club && direccion && imagen){
            const NewEvento = await Eventos.findOrCreate({
                where:{
                    tipo_de_evento,
                    horarios,
                    club,
                    direccion,
                    imagen
                }
            })
            return res.status(200).json(NewEvento)
        }
        return res.status(400).send("Datos incorrectos")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = postEvento