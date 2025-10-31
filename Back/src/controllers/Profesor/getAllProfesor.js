const {Profesor} = require ("../../db.js")

const getAllProfesor = async (req, res) => {
    try{
        const profesores = await Profesor.findAll({
            order:[
                ['graduacion', 'DESC'],
                ['fecha_de_examen', 'ASC'],
                ['fecha_de_nacimiento','ASC']
            ]
        });
        const allProfesores = profesores.map(
            ({id, nombre, apellido, imagen, fecha_de_nacimiento, escuela, graduacion, fecha_de_examen, instructor_mayor, estado, eliminado}) => 
            ({id, nombre, apellido, imagen, fecha_de_nacimiento, escuela, graduacion, fecha_de_examen, instructor_mayor, estado, eliminado})
        )
        return allProfesores.length > 0 ? res.json(allProfesores) : res.status(404).send("Not Found")  
    }catch(error){
        res.status(500).send(error.message)
    }
};
module.exports = getAllProfesor;