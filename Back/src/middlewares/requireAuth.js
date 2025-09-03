const jwt = require('jsonwebtoken')
const { Usuario } = require('../db')
require ('dotenv').config()

const requireAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization

    if( !authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({error: 'No se proporcionó token de autorización'})
    }

    const token = authHeader.split(` `)[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const usuario = await Usuario.findByPk(decoded.id)

        if(!usuario){
            return res.status(401).json({error: 'Usuario no encontrado'})
        }

        req.user = {
            id: usuario.id,
            nivel: usuario.nivel,
            idProfesor: usuario.idProfesor
        }

        next()
    } catch (error) {
        console.error(error)
        res.status(401).json({error:'Token invalido o expirado'})        
    }
}

module.exports = requireAuth