const { Dojan, Escuela, Profesor} = require("../../db.js");


const postDojan = async(req, res) =>{

    try{
        const {
            club,
            escuela,
            direccion,
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
                    escuela,
                    direccion,
                    imagen,
                    tel,
                    profesor,
                    horarios,
                    estado,
                    eliminado
                }

            })

            const profesoresDB = await Profesor.findAll({
                where:{
                    id: Array.isArray(profesor) ? profesor : [profesor]
                }
            })
            await newDojan.setDojanesProfesores(profesoresDB)

            const escuelasDB = await Escuela.findAll({
                where:{
                    id: Array.isArray(escuela) ? escuela : [escuela]
                }
            })
            await newDojan.setDojanesEscuela(escuelasDB)

            return res.status(200).json({
                dojan: newDojan,
                escuela: escuelasDB
            })
        }
        return res.status(400).send("Datos incorrectos")
    }catch (error){
        return res.status(500).send(error.message)
    }
}
module.exports = postDojan