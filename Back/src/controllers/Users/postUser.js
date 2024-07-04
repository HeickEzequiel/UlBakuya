const { Usuario } = require("../../db.js");

const postUser = async (req, res) => {
    try{
    const { nombre, apellido, tel, email, password } = req.body;
    if( nombre && apellido && tel && email && password ){
        const newUser = await Usuario.findOrCreate({
            where: { nombre, apellido, tel, email, password }
        })
        return res.json(newUser)
    }
    return res.status(400).send("Datos incorrectos")
    }catch (error){
        return res.status(500).send(error.message)
    }
}

module.exports = postUser;