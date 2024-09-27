const { Alumno } = require("../../db.js")
const deleteAlumno = async (req, res) =>{
    try {
        const oneAlumnoDB = await Alumno.findByPk(req.params.id)
        if (!oneAlumnoDB) {
            return res.status(404).json({ message: "Alumno no econtrado" });
        }        
    await oneAlumnoDB.destroy()
    return res.status(200).json({ message: "Alumno Borrado exitosamente" });
    } catch (error) {
        return res.status(500).json({ message: "Error al intentar borrar el Alumno", error: error.message });
    }
}
module.exports = deleteAlumno

/// Alumno, Profesor, Dojan, Usuario, Eventos, Escuela