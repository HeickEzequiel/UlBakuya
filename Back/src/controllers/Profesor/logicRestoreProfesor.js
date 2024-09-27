const { Profesor } = require("../../db.js")

const logicRestoreProfesor = async (req, res) =>{
    try {
        const { id } = req.params
        const profesor = await Profesor.findByPk(id)
        if(!profesor){
            return res.status(404).send("Profesor no encontrado")
        }
        profesor.eliminado = false
        await profesor.save()
        return res.json ({ message: "Profesor Restaurado"})
    } catch (error) {
        return res.status(500).send(`Error al restaurar el profesor: ${error.message}`)
    }
}
module.exports = logicRestoreProfesor