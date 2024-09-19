const { Alumno } = require("../../db.js")

const logicRestoreAlumno = async (req, res) =>{
    try {
        const { id } = req.params
        const alumno = await Alumno.findByPk(id)
        if(!alumno){
            return res.status(404).send("Alumno no encontrado")
        }

        alumno.eliminado = false
        await alumno.save()

        return res.json ({ message: "Alumno Restaurado"})
    } catch (error) {
        return res.status(500).send(`Error al restaurar el alumno: ${error.message}`)
    }
}

module.exports = logicRestoreAlumno