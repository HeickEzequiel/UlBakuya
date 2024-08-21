const { Alumno} = require("../../db.js");

const postAlumno = async(req, res) =>{
    try{
        const {
            nombre,
            apellido,
            imagen,
            fecha_de_nacimiento,
            escuela,
            graduacion,
            fecha_de_examen,
            profesor
        } = req.body;
console.log(           
    nombre,
    apellido,
    imagen,
    fecha_de_nacimiento,
    escuela,
    graduacion,
    fecha_de_examen,
    profesor)

        if(nombre && apellido && imagen!==undefined && fecha_de_nacimiento && escuela && graduacion && fecha_de_examen && profesor){
            const NewAlumno = await Alumno.findOrCreate({
                where:{
                    nombre,
                    apellido,
                    imagen,
                    fecha_de_nacimiento,
                    escuela,
                    graduacion,
                    fecha_de_examen,
                    profesor
                }

            })
            return res.status(200).json(NewAlumno)
        }
        return res.status(400).send("Datos incorrectos")
    }catch (error){
        return res.status(500).send(error.message)
    }
}
module.exports = postAlumno