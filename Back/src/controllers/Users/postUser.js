const { Usuario } = require("../../db.js");
const bcrypt = require("bcryptjs")

const postUser = async (req, res) => {
    try{
        const { nombre, apellido, fecha_de_nacimiento, tel, email, password, nivel, imagen, escuela, graduacion, fecha_de_examen} = req.body;
        
        if (!nombre || !apellido || !fecha_de_nacimiento || !tel || !email || !password) {
            return res.status(400).send("Datos incompletos");
        }
        
        const existingUser = await Usuario.findOne({ where: { email } });
        
        if (existingUser) {
            return res.status(401).json({ error: "Ya existe un usuario registrado con ese correo electrónico" });
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
    

        const [newUser, created] = await Usuario.findOrCreate({
            where: { 
                nombre, 
                apellido, 
                fecha_de_nacimiento, 
                tel, 
                email, 
                password: hashedPassword,
                nivel: nivel || "Observador", 
                imagen: imagen || null, 
                escuela: escuela || null, 
                graduacion: graduacion || null, 
                fecha_de_examen: fecha_de_examen || null
            }
        })
        return res.json(newUser)
        
    }catch (error){
        return res.status(500).send(error.message)
    }
}

module.exports = postUser;