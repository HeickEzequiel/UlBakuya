const {Alumno} = require ("../../db.js")

const getAllAlumnos = async (req, res) => {
    try{
        const alumnos = await Alumno.findAll();
        const allAlumnos = alumnos.map(
            ({id, nombre, apellido, imagen, fecha_de_nacimiento, escuela, graduacion, fecha_de_examen, profesor}) => 
            ({id, nombre, apellido, imagen, fecha_de_nacimiento, escuela, graduacion, fecha_de_examen, profesor})
        )
        return allAlumnos.length > 0 ? res.json(allAlumnos) : res.status(404).send("Not Found")  
    }catch(error){
        res.status(500).send(error.message)
    }
};
module.exports = getAllAlumnos;