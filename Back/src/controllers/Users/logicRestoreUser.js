const { Usuario } = require("../../db.js")

const logicRestoreUsuario = async (req, res) =>{
    try {
        const { id } = req.params
        const usuario = await Usuario.findByPk(id)
        if(!usuario){
            return res.status(404).send("Usuario no encontrado")
        }
        usuario.eliminado = false
        await usuario.save()
        return res.json ({ message: "Usuario Restaurado"})
    } catch (error) {
        return res.status(500).send(`Error al restaurar el usuario: ${error.message}`)
    }
}
module.exports = logicRestoreUsuario