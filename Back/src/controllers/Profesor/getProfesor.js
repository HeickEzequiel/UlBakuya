const {Profesor} = require("../../db.js")
const getProfesor = async (req, res) => {
  try{
    const oneProfesorDB = await Profesor.findByPk(req.params.id)
    const oneProfesor = {
      id: oneProfesorDB.id,
      nombre: oneProfesorDB.nombre,
      apellido: oneProfesorDB.apellido,
      imagen: oneProfesorDB.imagen,
      fecha_de_nacimiento: oneProfesorDB.fecha_de_nacimiento,
      escuela: oneProfesorDB.escuela,
      graduacion: oneProfesorDB.graduacion,
      fecha_de_examen: oneProfesorDB.fecha_de_examen,
      instructor_mayor: oneProfesorDB.instructor_mayor,
      estado:oneProfesorDB.estado,
      eliminado:oneProfesorDB.eliminado
    }
  return res.status(200).json(oneProfesor)
  } catch (error){
    return res.status(400).send(error.message)
  }
};

module.exports = getProfesor;