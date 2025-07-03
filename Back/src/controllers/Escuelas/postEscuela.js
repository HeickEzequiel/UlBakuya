const { Escuela } = require("../../db.js");
const Dojan = require("../../models/Dojan.js");

const postEscuela = async(req, res) =>{
    try{
        const {
            nombre,
            director,
            dojan,
            imagen,
            estado,
            eliminado
        } = req.body;
        

        if(nombre && director  && dojan && imagen!==undefined){
            const newEscuela = await Escuela.findOrCreate({
                where:{
                    nombre,
                    director,
                    dojan,
                    imagen,
                    estado,
                    eliminado
                },

                
            })

            const dojanDB = await Dojan.findOrCreate({
                where:{
                    id: Array.isArray(dojan) ? dojan : [dojan]
                }
            })
            await newEscuela.setEscuelaDojanes(dojanDB)
            
            return res.status(200).json({
                escuela: newEscuela,
                dojan: dojanDB
            })
        }
        return res.status(400).send("Datos incorrectos")
    }catch (error){
        console.log(error)
        return  res.status(500).send(error.message) 
        
    }
}
module.exports = postEscuela