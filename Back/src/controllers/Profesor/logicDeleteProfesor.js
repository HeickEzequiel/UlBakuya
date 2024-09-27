const { Profesor } = require("../../db.js")

const logicDeleteProfesor = async (req, res) =>{
    try {
        const { id } = req.params
        const profesor = await Profesor.findByPk(id)
        if(!profesor){
            return res.status(404).send("Profesor no encontrado")
        }
        profesor.eliminado = true
        await profesor.save()
        return res.json ({ message: "Profesor Borrado"})
    } catch (error) {
        return res.status(500).send(`Error al eliminar el profesor ${error.message}`)
    }
}
module.exports = logicDeleteProfesor