require('dotenv').config();
const { Op } = require("sequelize")
const { Inscripciones } = require("../../db.js");


const getInscripcionByName = async (req, res) =>{
    try{
        const { apellido } = req.query
        const InscripcionesDB = await Inscripciones.findAll({
            where:{
              apellido:{
                [Op.iLike]: `%${apellido}%`
                }
            }, limit: 15
        })

        for(let i=0; InscripcionesDB.length>i; i++){
            if(InscripcionesDB[i].image === ""){
                InscripcionesDB[i].image = "https://res.cloudinary.com/damoqjwmk/image/upload/v1723139453/no%20image.png"
            }
        }
        return InscripcionesDB.length > 0 
            ? res.json(InscripcionesDB) 
            : res.status(404).send(`No se encontraron alumnos inscriptos con ese apellido "${apellido}".`)
    } catch (error){
        console.error("Error al buscar Inscripciones por nombre:", error);
        return res.status(500).send(error.message)
    }
}
module.exports = getInscripcionByName;