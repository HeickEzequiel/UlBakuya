const { Inscripciones } = require("../../db.js")

const postInscripcion = async(req, res) =>{
    try {
        const{
            tipo_de_evento,
            horarios,
            nombre,
            apellido,
            edad,
            altura,
            peso,
            graduacion_actual,
            proxima_graduacion,
            imagen,
            estado,
            eliminado
        } = req.body

        if(tipo_de_evento && horarios && nombre && apellido && edad && altura && peso && graduacion_actual && proxima_graduacion && imagen && estado && eliminado){
            const NewInscripcion = await Inscripciones.findOrCreate({
                Where:{
                    tipo_de_evento,
                    horarios,
                    nombre,
                    apellido,
                    edad,
                    altura,
                    peso,
                    graduacion_actual,
                    proxima_graduacion,
                    imagen,
                    estado,
                    eliminado
                }
            })
            return res.status(200).json(NewInscripcion)
        }
        return res.status(400).send("Datos Incorrectos")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = postInscripcion