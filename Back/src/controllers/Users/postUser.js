const { Usuario } = require("../../db.js");

const postUser = async (req, res) => {
    try{
        const { nombre, apellido, fecha_de_nacimiento, tel, email, password, nivel, imagen, escuela, profesor, graduacion, fecha_de_examen} = req.body;
        
        const existingUser = await Usuario.findOne({ where: { email } });
        
        if (existingUser) {
            return res.status(401).json({ error: "Ya existe un usuario registrado con ese correo electrónico" });
        }
    
    if( nombre && apellido && fecha_de_nacimiento && tel && email && password){
        const [newUser, created] = await Usuario.findOrCreate({
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
        
        if (!created) {
            return res.status(400).json({ error: "El usuario ya existe" });
        }
        
        return res.json(newUser)
    }
    return res.status(400).send("Datos incorrectos")
    }catch (error){
        return res.status(500).send(error.message)
    }
}

module.exports = postUser;