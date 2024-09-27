const { Escuela }= require("../../db.js")

const logicDeleteEscuela = async(req, res) =>{
    try {
        const { id } = req.params
        const escuela = await Escuela.findByPk(id)
        if(!escuela){
            return res.status(404).send("Escuela no encontrada")
        }
        escuela.eliminado = true
        await escuela.save()
        return res.json ({message: "Escuela Borrada"})
    } catch (error) {
        return res.status(500).send(`Error al eliminar la Escuela: ${error.message}`)
    }
}
module.exports = logicDeleteEscuela