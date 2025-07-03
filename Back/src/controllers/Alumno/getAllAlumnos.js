const { Alumno } = require("../../db.js");

const getAllAlumnos = async (req, res) => {
  try {
    const alumnosDB = await Alumno.findAll({
      include: [
        {
          association: "alumnosProfesores",
          attributes: ["id", "nombre", "apellido"],
          through: { attributes: [] },
        },
        {
          association: "alumnosEscuela",
          attributes: ["id", "nombre"],
          through: { attributes: [] },
        },
      ],
    });

    const allAlumnos = alumnosDB.map((alumno) => ({
      id: alumno.id,
      nombre: alumno.nombre,
      apellido: alumno.apellido,
      imagen:
        alumno.imagen ||
        "https://res.cloudinary.com/damoqjwmk/image/upload/v1723139453/no%20image.png",
      fecha_de_nacimiento: alumno.fecha_de_nacimiento,
      graduacion: alumno.graduacion,
      fecha_de_examen: alumno.fecha_de_examen,
      estado: alumno.estado,
      eliminado: alumno.eliminado,
      profesores: alumno.alumnosProfesores.map((p) => ({
        id: p.id,
        nombre: p.nombre,
        apellido: p.apellido,
      })),
      escuelas: alumno.alumnosEscuela.map((e) => ({
        id: e.id,
        nombre: e.nombre,
      })),
    }));

    return allAlumnos.length > 0
      ? res.json(allAlumnos)
      : res.status(404).send("No se encontraron alumnos");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getAllAlumnos;
