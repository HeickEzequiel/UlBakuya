const { Eventos } = require("../../db.js")
const deleteEventos = async (req, res) =>{
    try {
        const oneEventoDB = await Eventos.findByPk(req.params.id)
        if (!oneEventoDB) {
            return res.status(404).json({ message: "Evento no econtrado" });
        }        
    await oneEventoDB.destroy()
    return res.status(200).json({ message: "Evento Borrado exitosamente" });
    } catch (error) {
        return res.status(500).json({ message: "Error al intentar borrar el evento", error: error.message });
    }
}
module.exports = deleteEventos