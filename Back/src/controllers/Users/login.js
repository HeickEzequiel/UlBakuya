const { Usuario } = require("../../db.js");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        
        if( email && password ){
            const actualUser = await Usuario.findOne({
                where: { email: email }
            })
            if(actualUser){
                const match = await bcrypt.compare(password, actualUser.password)
                if (!match){
                    return res.status(401).send("contraseña incorrecta")
                }
                if( actualUser.eliminado === true){
                    return res.status(403).send("usuario bloqueado o eliminado ")
                }
                
                const token = jwt.sign(
                    {
                        id: actualUser.id,
                        nivel: actualUser.nivel,
                        idProfesor: actualUser.idProfesor
                    },
                    process.env.JWT_SECRET,
                    {expiresIn:'8h'}
                )

                return res.json({
                    access:true,
                    token,
                    user:{
                        id:actualUser.id,
                        apellido:actualUser.apellido,
                        nombre:actualUser.nombre,
                        imagen:actualUser.imagen,
                        nivel: actualUser.nivel,
                        idProfesor: actualUser.idProfesor 
                    }
                })
                
            }
            return res.status(404).send("Usuario no encontrado")
        }
        return res.status(400).send("Faltan Datos")
    }catch (error){
        return (
        res.status(500).send(error.message),
        console.log(error.message)
        )
    }
}
module.exports = login;