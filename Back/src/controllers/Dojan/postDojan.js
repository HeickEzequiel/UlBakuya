const { Dojan } = require("../../db.js");

const postDojan = async(req, res) =>{
    try{
        const {
            club,
            direccion,
            escuela,
            imagen,
            tel,
            profesor,
            horarios,
            estado,
            eliminado
        } = req.body;

        if(club && direccion && imagen!==undefined && tel && profesor && horarios){
            const newDojan = await Dojan.findOrCreate({
                where:{
                    club,
                    direccion,
                    escuela,
                    imagen,
                    tel,
                    profesor,
                    horarios,
                    estado,
                    eliminado
                }

            })
            return res.status(200).json(newDojan)
        }
        return res.status(400).send("Datos incorrectos")
    }catch (error){
        return res.status(500).send(error.message)
    }
}
module.exports = postDojan