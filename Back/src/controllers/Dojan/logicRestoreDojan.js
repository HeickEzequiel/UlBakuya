const { Dojan } = require("../../db.js")

const logicRestoreDojan = async (req, res) =>{
    try {
        const { id } = req.params
        const dojan = await Dojan.findByPk(id)
        if(!dojan){
            return res.status(404).send("Dojan no encontrado")
        }
        dojan.eliminado = false
        await dojan.save()
        return res.json ({ message: "Dojan Restaurado"})
    } catch (error) {
        return res.status(500).send(`Error al restaurar el alumno: ${error.message}`)
    }
}
module.exports = logicRestoreDojan