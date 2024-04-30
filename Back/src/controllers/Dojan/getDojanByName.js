require('dotenv').config();
const { Op } = require("sequelize")
const { Dojan } = require("../../db.js");


const getDojanByName = async (req, res) =>{
    try{
        const { club } = req.query
        const DojanDB = await Dojan.findAll({
            where:{
              club:{
                [Op.iLike]: `%${club}%`
                }
            }, limit: 15
        })

        for(let i=0; DojanDB.length>i; i++){
            if(DojanDB[i].image === ""){
                DojanDB[i].image = "https://media.istockphoto.com/id/109215640/es/vector/piloto-de-coches-de-carrera.jpg?s=612x612&w=0&k=20&c=DfxGsueT0CGKCwVb3aMIRto0b3kaFyV44aLOc-icZOY="
            }
        }
        return DojanDB.length > 0 
            ? res.json(DojanDB) 
            : res.status(404).send(`La escuela de taekwondo UlBakuya no esta dando clases en el club "${club}".`)
    } catch (error){
        console.error("Error al buscar lugares de entrenamiento:", error);
        return res.status(500).send(error.message)
    }
}
module.exports = getDojanByName;