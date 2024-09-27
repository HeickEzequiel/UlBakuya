const { Dojan } = require("../../db.js")

const logicDeleteDojan = async (req, res) => {
    try {
        const { id } = req.params
        const dojan = await Dojan.findByPk(id)
        if(!dojan){
            return res.status(404).send("Dojan no encontrado")
        }
        dojan.elminado = true
        await dojan.save()
        return res.json ({ message: "Dojan borrado"})
    } catch (error) {
        return res.status(500).send(`Error al eliminar el Dojan: ${error.message}`)
    }
}
module.exports = logicDeleteDojan