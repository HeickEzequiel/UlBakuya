const { Inscripciones } = require("../../db.js")

const logicDeleteInscripcion = async (req, res) =>{
    try {
        const { id } = req.params
        const inscripcion = await Inscripciones.findByPk(id)
        if(!inscripcion){
            return res.status(404).send("inscripcion no encontrada")
        }
        inscripcion.eliminado = true
        await inscripcion.save()
        return res.json ({ message: "inscripcion Borrada"})
    } catch (error) {
        return res.status(500).send(`Error al eliminar la inscripcion: ${error.message}`)
    }
}
module.exports = logicDeleteInscripcion