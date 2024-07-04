const { Escuela } = require("../../db.js");

const postEscuela = async(req, res) =>{
    try{
        const {
            nombre,
            director,
            dojan,
            imagen,
            } = req.body;

        if(nombre && director && director && dojan && imagen!==undefined){
            const newEscuela = await Escuela.findOrCreate({
                where:{
                    nombre,
                    director,
                    dojan,
                    imagen,
                }

            })
            return res.status(200).json(newEscuela)
        }
        return res.status(400).send("Datos incorrectos")
    }catch (error){
        return res.status(500).send(error.message)
    }
}
module.exports = postEscuela