const { Usuario } = require("../../db.js");

const postUser = async (req, res) => {
    console.log(req.body)
    try{
    const { nombre, apellido, fecha_de_nacimiento, tel, email, password, nivel, imagen, escuela, profesor, graduacion, fecha_de_examen} = req.body;
    if( nombre && apellido && fecha_de_nacimiento && tel && email && password){
        const newUser = await Usuario.findOrCreate({
            where: { 
                nombre, 
                apellido, 
                fecha_de_nacimiento, 
                tel, 
                email, 
                password, 
                nivel: nivel || "Observador", 
                imagen: imagen || null, 
                escuela: escuela || null, 
                profesor: profesor || null, 
                graduacion: graduacion || null, 
                fecha_de_examen: fecha_de_examen || null
            }
        })
        return res.json(newUser)
    }
    return res.status(400).send("Datos incorrectos")
    }catch (error){
        return res.status(500).send(error.message)
    }
}

module.exports = postUser;