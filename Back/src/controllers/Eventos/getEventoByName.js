require ('dotenv').config();
const { Op } = require("sequelize")
const { Eventos } = require("../../db.js")

const getEventoByName = async (req, res) =>{
    try {
        const {tipo_de_evento} = req.query
        const eventoDB = await Eventos.findAll({
            where:{
                tipo_de_evento:{
                    [Op.like]: `%${tipo_de_evento}%`
                }
            }, limit: 15
        })
        return eventoDB.length > 0 
        ? res.json(eventoDB)
        : res.status(404).send("No se encontraron eventos")
    } catch (error) {
        console.error("Error al buscar eventos", error)
        return res.status(500).send(error.message)
    }
}
module.exports = getEventoByName