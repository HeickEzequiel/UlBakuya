const { Inscripciones } = require("../../db.js")

const logicRestoreInscripcion = async (req, res) =>{
    try {
        const { id } = req.params
        const inscripcion = await Inscripciones.findByPk(id)
        if(!inscripcion){
            return res.status(404).send("inscripcion no encontrada")
        }
        inscripcion.eliminado = false
        await inscripcion.save()
        return res.json ({ message: "inscripcion Restaurada"})
    } catch (error) {
        return res.status(500).send(`Error al restaurar la inscripcion: ${error.message}`)
    }
}
module.exports = logicRestoreInscripcion