require('dotenv').config();
const { Op } = require("sequelize")
const { Profesor } = require("../../db.js");


const getProfesorByName = async (req, res) =>{
    try{
        const { apellido } = req.query
        const ProfesorDB = await Profesor.findAll({
            where:{
                apellido:{
                    [Op.iLike]: `%${apellido}%`
                }
            }, 
            limit: 15
        })

        for(let i=0; ProfesorDB.length>i; i++){
            if(ProfesorDB[i].image === ""){
                ProfesorDB[i].image = "https://media.istockphoto.com/id/109215640/es/vector/piloto-de-coches-de-carrera.jpg?s=612x612&w=0&k=20&c=DfxGsueT0CGKCwVb3aMIRto0b3kaFyV44aLOc-icZOY="
            }
        }
        return ProfesorDB.length > 0 
            ? res.json(ProfesorDB) 
            : res.status(404).send(`No se encontraron alumnos con ese apellido "${apellido}".`)
    } catch (error){
        console.error("Error al buscar conductores por nombre:", error);
        return res.status(500).send(error.message)
    }
}
module.exports = getProfesorByName;