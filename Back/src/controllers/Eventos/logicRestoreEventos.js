const { Eventos } = require("../../db.js")

const logicRestoreEvento = async (req, res) =>{
    try {
        const { id } = req.params
        const evento = await Eventos.findByPk(id)
        if(!evento){
            return res.status(404).send("Evento no encontrado")
        }
        evento.eliminado = false
        await evento.save()
        return res.json ({ message: "Evento Restaurado"})
    } catch (error) {
        return res.status(500).send(`Error al restaurar el evento: ${error.message}`)
    }
}
module.exports = logicRestoreEvento