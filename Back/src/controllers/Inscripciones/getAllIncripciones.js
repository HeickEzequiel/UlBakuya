const { Inscripciones } = requiere ("../../db.js")

const getAllinscripciones = async (req, res) =>{
    try{
        const inscripciones = await Inscripciones.findAll();
        const allInscripciones = inscripciones.map(
            ({id, tipo_de_evento, horario, nombre, apellido, edad, altura, peso, graduacion_actual, proxima_graduacion, imagen, estado, eliminado})=>
            ({id, tipo_de_evento, horario, nombre, apellido, edad, altura, peso, graduacion_actual, proxima_graduacion, imagen, estado, eliminado})
        )
        for(let i=0; allInscripciones.length>i; i++){
            if(allInscripciones[i].imagen === ""){
                allInscripciones[i].imagen = "inserte imagen"
            }
        }
        return allInscripciones.length > 0 ? res.json(allInscripciones) : res.status(404).send("Not Found")
    }catch(error){
        res.status(500).send(error.message)
    }
}
module.exports = getAllinscripciones