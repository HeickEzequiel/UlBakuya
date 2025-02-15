const { Inscripciones } = require("../../db.js")
const deleteInscripcion = async(req, res) =>{
    try{
        const oneInscripcionDB = await Inscripcion.findByPk(req.params.id)
        if(!oneInscripcionDB){
            return res.status(404).json({message:"Inscripcion no encontrada"})
        }
    await oneInscripcionDB.destroy()
    return res.status(200).json({ message: "La inscripcion fue borrada exitosamente"})
    } catch(error){
        return res.status(500).json({ message: "Error al intentar borrar la inscripcion", error: error.message})
    }
}
module.exports = deleteInscripcion