const { Alumno } = require("../../db.js");

const getAlumno = async (req, res) => {
  try {
    const oneAlumnoDB = await Alumno.findByPk(req.params.id, {
      include: [
        {
          association: 'alumnosProfesores',
          attributes: ['id', 'nombre', 'apellido'],
          through: { attributes: [] }
        },
        {
          association: 'alumnosEscuela',
          attributes: ['id', 'nombre'],
          through: { attributes: [] }
        }
      ]
    });

    if (!oneAlumnoDB) return res.status(404).send("Alumno no encontrado");

    const oneAlumno = {
      id: oneAlumnoDB.id,
      nombre: oneAlumnoDB.nombre,
      apellido: oneAlumnoDB.apellido,
      imagen: oneAlumnoDB.imagen || "https://res.cloudinary.com/damoqjwmk/image/upload/v1723139453/no%20image.png",
      fecha_de_nacimiento: oneAlumnoDB.fecha_de_nacimiento,
      graduacion: oneAlumnoDB.graduacion,
      fecha_de_examen: oneAlumnoDB.fecha_de_examen,
      estado: oneAlumnoDB.estado,
      eliminado: oneAlumnoDB.eliminado,
      profesores: oneAlumnoDB.alumnosProfesores.map(p => ({
        id: p.id,
        nombre: p.nombre,
        apellido: p.apellido
      })),
      escuelas: oneAlumnoDB.alumnosEscuela.map(e => ({
        id: e.id,
        nombre: e.nombre
      }))
    };

    return res.status(200).json(oneAlumno);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = getAlumno;
