const { Usuario } = require("../../db.js");

const updateUser = async (req, res) => {
  
    try {
        const { id } = req.params;
        const {
            nombre,
            apellido,
            imagen,
            fecha_de_nacimiento,
            tel,
            password,
            nivel,
            escuela,
            graduacion,
            fecha_de_examen,
            profesor,
            idProfesor
         
        } = req.body;

        const newData = {
            nombre,
            apellido,
            imagen,
            fecha_de_nacimiento,
            tel,
            password,
            nivel,
            escuela,
            graduacion,
            fecha_de_examen,
            profesor,
            idProfesor
           
        };

        let updateFields = [];

      
        for (let key in newData) {
            if (newData[key]) {
                updateFields.push({ [key]: newData[key] });
            }
        }

        if (updateFields.length === 0) {
            return res.status(400).json({ error: "No se proporcionaron datos para actualizar" })
        }

        const result = await Usuario.update(Object.assign({}, ...updateFields), {
            where: {
                id: id
            }
        });

        if (result[0] > 0) {
            res.json({
                status: "Usuario actualizado correctamente"
            });
            console.log("Usuario actualizado correctamente");
        } else {
            res.status(404).json({ error: "No se encontró ningún Usuario con ese ID" });
            console.log("No se encontró ningún Usuario con ese ID");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
};

module.exports = updateUser;