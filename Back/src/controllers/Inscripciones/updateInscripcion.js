const { Inscripciones } = require("../../db.js");

const updateIncripcion = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            tipo_de_evento,
            horarios,
            nombre,
            apellido,
            edad,
            altura,
            peso,
            graduacion_actual,
            proxima_graduacion,
            imagen,
            estado,
            eliminado
        } = req.body;

        const newData = {
            tipo_de_evento,
            horarios,
            nombre,
            apellido,
            edad,
            altura,
            peso,
            graduacion_actual,
            proxima_graduacion,
            imagen,
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

        const result = await Inscripciones.update(Object.assign({}, ...updateFields), {
            where: {
                id: id
            }
        });

        if (result[0] > 0) {
            res.json({
                status: "inscripcion actualizada correctamente"
            });
            console.log("inscripcion actualizada correctamente");
        } else {
            res.status(404).json({ error: "No se encontró ningúna inscripcion" });
            console.log("No se encontró ningúna inscripcion");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
};

module.exports = updateIncripcion;