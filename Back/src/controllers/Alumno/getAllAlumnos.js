const {Alumno} = require ("../../db.js")

const getAllAlumnos = async (req, res) => {
    try{
        const alumnos = await Alumno.findAll();
        const allAlumnos = alumnos.map(
            ({id, nombre, apellido, imagen, fecha_de_nacimiento, escuela, graduacion, fecha_de_examen, profesor, estado, eliminado}) => 
            ({id, nombre, apellido, imagen, fecha_de_nacimiento, escuela, graduacion, fecha_de_examen, profesor, estado, eliminado})
        )
        for(let i=0; allAlumnos.length>i; i++){
            if(allAlumnos[i].imagen === ""){
                allAlumnos[i].imagen = "https://res.cloudinary.com/damoqjwmk/image/upload/v1723139453/no%20image.png"
            }
            }
        return allAlumnos.length > 0 ? res.json(allAlumnos) : res.status(404).send("Not Found")  
    }catch(error){
        res.status(500).send(error.message)
    }
};
module.exports = getAllAlumnos;