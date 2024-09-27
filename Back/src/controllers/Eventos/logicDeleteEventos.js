const { Eventos } = require("../../db.js")

const logicDeleteEventos = async (req, res) =>{
    try {
        const { id } = req.params
        const evento = await Eventos.findByPk(id)
        if(!evento){
            return res.status(404).send("Evento no encontrado")
        }
        evento.eliminado = true
        await evento.save()
        return res.json ({ message: "Evento Borrado"})
    } catch (error) {
        return res.status(500).send(`Error al eliminar el evento ${error.message}`)
    }
}
module.exports = logicDeleteEventos