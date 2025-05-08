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
            escuela,
            graduacion_actual,
            proxima_graduacion,
            imagen,
        } = req.body
        
        if(tipo_de_evento && horarios && nombre && apellido && edad && altura && peso && escuela && graduacion_actual && proxima_graduacion && imagen){
            const NewInscripcion = await Inscripciones.findOrCreate({
                where:{
                    tipo_de_evento,
                    horarios,
                    nombre,
                    apellido,
                    edad,
                    altura,
                    peso,
                    escuela,
                    graduacion_actual,
                    proxima_graduacion,
                    imagen,
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