const { Alumno } = require("../../db.js")
const deleteAlumno = async (req, res) =>{
    try {
        const oneAlumnoDB = await Alumno.findByPk(req.params.id)
        await oneAlumnoDB.destroy()
    } catch (error) {
        
    }
}
module.exports = deleteAlumno