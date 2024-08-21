const { Usuario } = require("../../db.js");

const postUser = async (req, res) => {
    try{
    const { nombre, apellido, imagen, fecha_de_nacimiento, tel, email, password, nivel, escuela, graduacion, fecha_de_examen, profesor } = req.body;
    if( nombre && apellido && imagen && fecha_de_nacimiento && tel && email && password && nivel && escuela && graduacion && fecha_de_examen && profesor ){
        const newUser = await Usuario.findOrCreate({
            where: { nombre, apellido, imagen, fecha_de_nacimiento, tel, email, password, nivel, escuela, graduacion, fecha_de_examen, profesor }
        })
        return res.json(newUser)
    }
    return res.status(400).send("Datos incorrectos")
    }catch (error){
        return res.status(500).send(error.message)
    }
}

module.exports = postUser;