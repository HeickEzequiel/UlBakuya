const { Profesor } = require("../../db.js")
const deleteProfesor = async (req, res) =>{
    try {
        const oneProfesorDB = await Profesor.findByPk(req.params.id)
        if (!oneProfesorDB) {
            return res.status(404).json({ message: "Profesor no econtrado" });
        }        
    await oneProfesorDB.destroy()
    return res.status(200).json({ message: "Profesor Borrado exitosamente" });
    } catch (error) {
        return res.status(500).json({ message: "Error al intentar borrar el Alumno", error: error.message });
    }
}
module.exports = deleteProfesor