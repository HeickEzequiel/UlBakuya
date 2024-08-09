require('dotenv').config();
const { Op } = require("sequelize")
const { Usuario } = require("../../db.js");


const getUserByName = async (req, res) =>{
    try{
        const { apellido } = req.query
        const userDB = await Usuario.findAll({
            where:{
                apellido:{
                    [Op.iLike]: `%${apellido}%`
                }
            }, limit: 15
        })

        for(let i=0; userDB.length>i; i++){
            if(userDB[i].image === ""){
                userDB[i].image = "https://media.istockphoto.com/id/109215640/es/vector/piloto-de-coches-de-carrera.jpg?s=612x612&w=0&k=20&c=DfxGsueT0CGKCwVb3aMIRto0b3kaFyV44aLOc-icZOY="
            }
        }
        return userDB.length > 0 
            ? res.json(userDB) 
            : res.status(404).send(`No se encontraron alumnos con ese apellido "${apellido}".`)
    } catch (error){
        console.error("Error al buscar conductores por nombre:", error);
        return res.status(500).send(error.message)
    }
}
module.exports = getUserByName;