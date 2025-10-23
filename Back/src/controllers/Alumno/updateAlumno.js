const { Alumno, Profesor, Escuela } = require("../../db.js");

const updateAlumno = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nombre,
      apellido,
      imagen,
      fecha_de_nacimiento,
      escuela,
      graduacion,
      fecha_de_examen,
      profesor,
      estado,
      eliminado
    } = req.body;

    const alumno = await Alumno.findByPk(id);
    if (!alumno) {
      return res.status(404).json({ error: "Alumno no encontrado" });
    }


    await alumno.update({
      nombre,
      apellido,
      imagen,
      fecha_de_nacimiento,
      graduacion,
      fecha_de_examen,
      estado,
      eliminado
    });


    if (profesor && Array.isArray(profesor)) {
      const profesoresDB = await Profesor.findAll({
        where: { id: profesor }
      });
      await alumno.setAlumnosProfesores(profesoresDB);
    }


    if (escuela && Array.isArray(escuela)) {
      const escuelasDB = await Escuela.findAll({
        where: { id: escuela }
      });
      await alumno.setAlumnosEscuela(escuelasDB);
    }

    return res.json({ status: "Alumno actualizado correctamente" });

  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno del servidor");
  }
};

module.exports = updateAlumno;
