const {Dojan} = require("../../db.js")
const getDojan = async (req, res) => {
  try{
    const oneDojanDB = await Dojan.findByPk(req.params.id)
    const oneDojan = {
      id: oneDojanDB.id,
      nombre: oneDojanDB.nombre,
      apellido: oneDojanDB.apellido,
      imagen: oneDojanDB.imagen,
      fecha_de_nacimiento: oneDojanDB.fecha_de_nacimiento,
      escuela: oneDojanDB.escuela,
      graduacion: oneDojanDB.graduacion,
      fecha_de_examen: oneDojanDB.interests
    }
  return res.status(200).json(oneDojan)
  } catch (error){
    return res.status(400).send(error.message)
  }
};

module.exports = getDojan;
