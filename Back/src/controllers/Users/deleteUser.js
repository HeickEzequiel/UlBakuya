const { Usuario } = require("../../db.js")
const deleteUsuario = async (req, res) =>{
    try {
        const oneUsuarioDB = await Usuario.findByPk(req.params.id)
        if (!oneUsuarioDB) {
            return res.status(404).json({ message: "Usuario no econtrado" });
        }        
    await oneUsuarioDB.destroy()
    return res.status(200).json({ message: "Usuario Borrado exitosamente" });
    } catch (error) {
        return res.status(500).json({ message: "Error al intentar borrar el Usuario", error: error.message });
    }
}
module.exports = deleteUsuario