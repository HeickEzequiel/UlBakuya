const {Alumno} = require("../../db.js")
const getAlumno = async (req, res) => {
  try{
    const oneAlumnoDB = await Alumno.findByPk(req.params.id)
    const oneAlumno = {
      id: oneAlumnoDB.id,
      nombre: oneAlumnoDB.nombre,
      apellido: oneAlumnoDB.apellido,
      imagen: oneAlumnoDB.imagen,
      fecha_de_nacimiento: oneAlumnoDB.fecha_de_nacimiento,
      escuela: oneAlumnoDB.escuela,
      graduacion: oneAlumnoDB.graduacion,
      fecha_de_examen: oneAlumnoDB.fecha_de_examen,
      profesor: oneAlumnoDB.profesor,
      estado: oneAlumnoDB.estado,
      eliminado: oneAlumnoDB.eliminado

    }

    if(oneAlumno.imagen === "") oneAlumno.imagen= "https://res.cloudinary.com/damoqjwmk/image/upload/v1723139453/no%20image.png" 
    return res.status(200).json(oneAlumno)
  } catch (error){
    return res.status(400).send(error.message)
  }
};

module.exports = getAlumno;
