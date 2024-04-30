const { Profesor } = require("../../db.js");

const updateProfesor = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            nombre,
            apellido,
            imagen,
            fecha_de_nacimiento,
            escuela,
            graduacion,
            fecha_de_examen
        } = req.body;

        const newData = {
            nombre,
            apellido,
            imagen,
            fecha_de_nacimiento,
            escuela,
            graduacion,
            fecha_de_examen
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

        const result = await Profesor.update(Object.assign({}, ...updateFields), {
            where: {
                id: id
            }
        });

        if (result[0] > 0) {
            res.json({
                status: "Profesor actualizado correctamente"
            });
            console.log("Profesor actualizado correctamente");
        } else {
            res.status(404).json({ error: "No se encontró ningún profesor con ese ID" });
            console.log("No se encontró ningún profesor con ese ID");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
};

module.exports = updateProfesor;