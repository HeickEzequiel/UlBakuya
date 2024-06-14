require('dotenv').config();
const { Op } = require("sequelize")
const { Escuela } = require("../../db.js");


const getEscuelaByName = async (req, res) =>{
    try{
        const { nombre } = req.query
        const escuelaDB = await Escuela.findAll({
            where:{
              nombre:{
                [Op.iLike]: `%${nombre}%`
                }
            }, limit: 15
        })

        for(let i=0; escuelaDB.length>i; i++){
            if(escuelaDB[i].image === ""){
                escuelaDB[i].image = "https://media.istockphoto.com/id/109215640/es/vector/piloto-de-coches-de-carrera.jpg?s=612x612&w=0&k=20&c=DfxGsueT0CGKCwVb3aMIRto0b3kaFyV44aLOc-icZOY="
            }
        }
        return escuelaDB.length > 0 
            ? res.json(escuelaDB) 
            : res.status(404).send(`La escuela de taekwondo UlBakuya  "${nombre}" no existe.`)
    } catch (error){
        console.error("Error al buscar escuela:", error);
        return res.status(500).send(error.message)
    }
}
module.exports = getEscuelaByName;