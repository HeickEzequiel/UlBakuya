const {Escuela} = require ("../../db.js")

const getAllEscuela = async (req, res) => {
    try{
        const escuela = await Escuela.findAll();
        const allEscuela = escuela.map(
            ({id, nombre, director, dojan, imagen, estado, eliminado}) => 
            ({id, nombre, director, dojan, imagen, estado, eliminado})
        )
        return allEscuela.length > 0 ? res.json(allEscuela) : res.status(404).send("Not Found")  
    }catch(error){
        res.status(500).send(error.message)
    }
};
module.exports = getAllEscuela;