const { Eventos } = require("../../db.js")
const postEvento = async(req, res) =>{
    try {
        const {
            tipo_de_evento,
            fecha_del_evento,
            horarios,
            club,
            direccion,
            imagen
        } = req.body;

        const horariosArray = horarios
            .split(',')
            .map(h => h.trim())
            .filter(h => h.length > 0);
        
        if(tipo_de_evento && horarios && club && direccion && imagen){
            const NewEvento = await Eventos.findOrCreate({
                where:{
                    tipo_de_evento,
                    fecha_del_evento,
                    club,
                    direccion,
                    imagen
                },
                defaults:{
                    horarios: horariosArray
                }
            })
            return res.status(200).json(NewEvento)
        }
        return res.status(400).send("Datos incorrectos")
    } catch (error) {
        console.log(error)
        return res.status(500).send(error.message)
    }
}
module.exports = postEvento