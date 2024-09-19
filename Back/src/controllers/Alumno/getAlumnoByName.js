require('dotenv').config();
const { Op } = require("sequelize")
const { Alumno } = require("../../db.js");


const getAlumnoByName = async (req, res) =>{
    try{
        const { apellido } = req.query
        const AlumnoDB = await Alumno.findAll({
            where:{
              apellido:{
                [Op.iLike]: `%${apellido}%`
                }
            }, limit: 15
        })

        for(let i=0; AlumnoDB.length>i; i++){
            if(AlumnoDB[i].image === ""){
                AlumnoDB[i].image = "https://res.cloudinary.com/damoqjwmk/image/upload/v1723139453/no%20image.png"
            }
        }
        return AlumnoDB.length > 0 
            ? res.json(AlumnoDB) 
            : res.status(404).send(`No se encontraron alumnos con ese apellido "${apellido}".`)
    } catch (error){
        console.error("Error al buscar alumnos por nombre:", error);
        return res.status(500).send(error.message)
    }
}
module.exports = getAlumnoByName;