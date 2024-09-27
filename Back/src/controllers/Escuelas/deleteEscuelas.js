const { Escuela } = require("../../db.js")
const deleteEscuela = async (req, res) =>{
    try {
        const oneEsculaDB = await Escuela.findByPK(req.params.id)
        if(!oneEsculaDB){
            return res.status(404).json({ message: "Escuela no encontrada"})
        }
    await oneEsculaDB.destroy()
    return res.status(200).json({ message: "Escuela borrada exitosamente"})
    } catch (error) {
        return res.status(500).json({ message: "Error al intentar borrar la escuela"})        
    }
}
module.exports = deleteEscuela