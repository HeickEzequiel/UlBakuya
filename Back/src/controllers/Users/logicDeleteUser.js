const { Usuario } = require("../../db.js")

const logicDeleteUsuario = async (req, res) =>{
    try {
        const { id } = req.params
        const usuario = await Usuario.findByPk(id)
        if(!usuario){
            return res.status(404).send("Usuario no encontrado")
        }
        usuario.eliminado = true
        await usuario.save()
        return res.json ({ message: "Usuario Borrado"})
    } catch (error) {
        return res.status(500).send(`Error al eliminar el usuario: ${error.message}`)
    }
}
module.exports = logicDeleteUsuario