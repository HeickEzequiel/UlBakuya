const {Dojan} = require ("../../db.js")

const getAllDojan = async (req, res) => {
    try{
        const dojan = await Dojan.findAll();
        const allDojan = dojan.map(
            ({id, club, escuela, direccion, imagen, tel, profesor, horarios, estado, eliminado}) => 
            ({id, club, escuela, direccion, imagen, tel, profesor, horarios, estado, eliminado})
        )
        return allDojan.length > 0 ? res.json(allDojan) : res.status(404).send("Not Found")  
    }catch(error){
        res.status(500).send(error.message)
    }
};
module.exports = getAllDojan;