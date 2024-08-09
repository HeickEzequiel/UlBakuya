const {Usuario} = require ("../../db.js")

const getAllUsers = async (req, res) => {
    try{
        const usuarios = await Usuario.findAll();
        const allUsuarios = usuarios.map(
            ({id, nombre, apellido, imagen, fecha_de_nacimiento, tel, email, password, nivel}) => 
            ({id, nombre, apellido, imagen, fecha_de_nacimiento, tel, email, password, nivel})
        )
        return allUsuarios.length > 0 ? res.json(allUsuarios) : res.status(404).send("Not Found")  
    }catch(error){
        res.status(500).send(error.message)
    }
};
module.exports = getAllUsers;