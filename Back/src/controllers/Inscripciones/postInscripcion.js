const { Inscripciones, Eventos } = require("../../db.js")

const postInscripcion = async(req, res) =>{
    try {
        const{
            tipo_de_evento,
            fecha_del_evento,
            horarios,
            nombre,
            apellido,
            edad,
            altura,
            peso,
            escuela,
            profesor,
            graduacion_actual,
            proxima_graduacion,
            imagen,
        } = req.body
        
        if(tipo_de_evento && horarios && nombre && apellido && edad && altura && peso && escuela && graduacion_actual && imagen){
            const newInscripcion = await Inscripciones.findOrCreate({
                where:{
                    tipo_de_evento,
                    fecha_del_evento,
                    horarios,
                    nombre,
                    apellido,
                    edad,
                    altura,
                    peso,
                    escuela,
                    profesor,
                    graduacion_actual,
                    proxima_graduacion,
                    imagen,
                }
            })

            const eventosDB = await Eventos.findAll({
                where: {
                    id: Array.isArray(tipo_de_evento) ? tipo_de_evento : [tipo_de_evento]
                }
            })
            await newInscripcion.setInscripcionesEventos(eventosDB)
            
            return res.status(200).json({
                inscripcion: newInscripcion,
                evento: eventosDB
            })
        }
        return res.status(400).send("Datos Incorrectos")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = postInscripcion