const { Escuela } = require("../../db.js")

const logicRestoreEscuela = async (req, res) =>{
    try {
        const { id } = req.params
        const escuela = await Escuela.findByPk(id)
        if(!escuela){
            return res.status(404).send("Escuela no encontrado")
        }
        escuela.eliminado = false
        await escuela.save()
        return res.json ({ message: "Escuela Restaurada"})
    } catch (error) {
        return res.status(500).send(`Error al restaurar la Escuela: ${error.message}`)
    }
}
module.exports = logicRestoreEscuela