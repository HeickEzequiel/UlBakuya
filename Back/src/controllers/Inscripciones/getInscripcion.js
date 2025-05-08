const {Inscripciones} = require ("../../db.js")
const getInscripcion = async (req, res) =>{
    try {
        const oneInscripcionDB = await Inscripciones.findByPk(req.params.id)
        const oneInscripcion ={
            id: oneInscripcionDB.id,
            tipo_de_evento: oneInscripcionDB.tipo_de_evento,
            fecha_del_evento: oneInscripcionDB.fecha_del_evento,
            horario: oneInscripcionDB.horario,
            nombre: oneInscripcionDB.nombre,
            apellido: oneInscripcionDB.apellido,
            edad: oneInscripcionDB.edad,
            altura: oneInscripcionDB.altura,
            peso: oneInscripcionDB.peso,
            escuela: oneInscripcionDB.escuela,
            profesor:oneInscripcionDB.profesor,
            graduacion_actual: oneInscripcionDB.graduacion_actual,
            proxima_graduacion: oneInscripcionDB.proxima_graduacion,
            imagen: oneInscripcionDB.imagen,
            estado: oneInscripcionDB.estado,
            eliminado: oneInscripcionDB.eliminado

        }
        if(oneInscripcion.imagen === "") oneInscripcion.imagen = "https://res.cloudinary.com/damoqjwmk/image/upload/v1723139453/no%20image.png"
        return res.status(200).json(oneInscripcion)
    } catch (error) {
        return res.status(400).send(error.message)
    }
}
module.exports = getInscripcion 