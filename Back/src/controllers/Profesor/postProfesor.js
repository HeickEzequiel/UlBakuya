const {Profesor} = require("../../db.js");

const postProfesor = async(req, res) =>{
    try{
        const {
            nombre,
            apellido,
            imagen,
            fecha_de_nacimiento,
            escuela,
            graduacion,
            fecha_de_examen,
            instructor_mayor
        } = req.body;

        if(nombre && apellido && imagen!==undefined && fecha_de_nacimiento && escuela && graduacion && fecha_de_examen){
            const [newProfesor, created] = await Profesor.findOrCreate({
                where:{
                    nombre,
                    apellido,
                    fecha_de_nacimiento
                },
                defaults:{
                    imagen,
                    escuela,
                    graduacion,
                    fecha_de_examen,
                    instructor_mayor
                }

            })
            
            return res.status(200).json(newProfesor)
        }
        return res.status(400).send("Datos incorrectos")
    }catch (error){
        return res.status(500).send(error.message)
    }
}
module.exports = postProfesor