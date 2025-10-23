const {Dojan} = require("../../db.js")
const getDojan = async (req, res) => {
  try{
    const oneDojanDB = await Dojan.findByPk(req.params.id)
    const oneDojan = {
      id: oneDojanDB.id,
      club: oneDojanDB.club,
      escuela: oneDojanDB.escuela,
      direccion: oneDojanDB.direccion,
      imagen: oneDojanDB.imagen,
      tel: oneDojanDB.tel,
      profesor: oneDojanDB.profesor,
      horarios: oneDojanDB.horarios,
      estado: oneDojanDB.estado,
      eliminado: oneDojanDB.eliminado
    }
    console.log(oneDojan)
  return res.status(200).json(oneDojan)
  } catch (error){
    return res.status(400).send(error.message)
  }
};

module.exports = getDojan;
