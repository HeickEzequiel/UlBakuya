const { Alumno } = require("../../db.js")

const logicDeleteAlumno = async (req, res) =>{
    try {
        const { id } = req.params
        const alumno = await Alumno.findByPk(id)
        if(!alumno){
            return res.status(404).send("Alumno no encontrado")
        }

        alumno.eliminado = true
        await alumno.save()

        return res.json ({ message: "Alumno Borrado"})
    } catch (error) {
        return res.status(500).send(`Error al eliminar el alumno: ${error.message}`)
    }
}

module.exports = logicDeleteAlumno