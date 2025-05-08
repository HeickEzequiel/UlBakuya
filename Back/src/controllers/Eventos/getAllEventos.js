const {Eventos} = require ("../../db.js");

const getAllEventos = async (req, res) => {
    try {
        const eventos = await Eventos.findAll();
        const allEventos = eventos.map(
            ({id, tipo_de_evento, fecha_del_evento, horarios, club, direccion, imagen}) =>
            ({id, tipo_de_evento, fecha_del_evento, horarios, club, direccion, imagen})
        )
        return allEventos.length > 0 ? res.json(allEventos) : res.status(404).send("Not Found")
    } catch (error) {
        res.status(500).send(error.message)
    }
}
module.exports = getAllEventos