const { Dojan } = require("../../db.js");

const updateDojan = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            club,
            direccion,
            imagen,
            tel,
            profesor,
            horarios,
        } = req.body;

        const newData = {
            club,
            direccion,
            imagen,
            tel,
            profesor,
            horarios,
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

        const result = await Dojan.update(Object.assign({}, ...updateFields), {
            where: {
                id: id
            }
        });

        if (result[0] > 0) {
            res.json({
                status: "Dojan actualizado correctamente"
            });
            console.log("Dojan actualizado correctamente");
        } else {
            res.status(404).json({ error: "No se encontró ningún dojan con ese ID" });
            console.log("No se encontró ningún dojan con ese ID");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
};

module.exports = updateDojan;