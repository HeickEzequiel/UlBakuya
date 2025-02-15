const { Alumno } = require("../../db.js");

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

        const newData = {
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
        };

        let updateFields = [];

      
        for (let key in newData) {
            if (newData[key]) {
                updateFields.push({ [key]: newData[key] });
            }
        }

        if (updateFields.length === 0) {
            return res.status(400).json({ error: "No se proporcionaron datos para actualizar" });
        }

        const result = await Alumno.update(Object.assign({}, ...updateFields), {
            where: {
                id: id
            }
        });

        if (result[0] > 0) {
            res.json({
                status: "Alumno actualizado correctamente"
            });
            console.log("Alumno actualizado correctamente");
        } else {
            res.status(404).json({ error: "No se encontró ningún alumno con ese ID" });
            console.log("No se encontró ningún alumno con ese ID");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
};

module.exports = updateAlumno;