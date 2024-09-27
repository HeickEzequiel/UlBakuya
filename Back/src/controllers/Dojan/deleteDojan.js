const { Dojan } = require("../../db.js")
const deleteDojan = async (req, res) =>{
    try {
        const oneDojanDB = await Dojan.findByPk(req.params.id)
        if(!oneDojanDB){
            return res.status(404).json({ message: "Dojan no encontrado"})
        }
        await oneDojanDB.destroy()
        return res.status(200).json({message: "Dojan borrado exitosamente"})
    } catch (error) {
        return res.status(500).json({ message: "Error al intentar borrar el Dojan"})
    }
}
module.exports = deleteDojan