const { Eventos } = require("../../db.js")


const updateEvento = async (req, res) =>{
    try {
        const { id } = req.params
        const {
            tipo_de_evento,
            horarios,
            club,
            direccion,
            imagen
        } = req.body

        const newData = {
            tipo_de_evento,
            horarios,
            club,
            direccion,
            imagen
        }

        let updateFields = []

        for (let key in newData){
            if(newData[key]){
                updateFields.push({[key]: newData[key]})
            }
        }
        const result = await Eventos.update(Object.assign({}, ...updateFields),{
          where:{
            id:id
          }  
        })

        if (result[0] > 0) {
            res.json({
                status: "Evento actualizado correctamente"
            })
        }else {
            res.status(404).json({error:"No se encontro ningun evento"})
        }
    } catch (error) {
        res.status(500).send("Error interno del servido")
    }
}
module.exports = updateEvento