const {Escuela} = require("../../db.js")
const getEscuela = async (req, res) => {
  
  try{
    const oneEscuelaDB = await Escuela.findByPk(req.params.id)
    const oneEscuela = {
      id: oneEscuelaDB.id,
      nombre: oneEscuelaDB.nombre,
      director: oneEscuelaDB.director,
      dojan: oneEscuelaDB.dojan,
      imagen: oneEscuelaDB.imagen,
      estado: oneEscuelaDB.estado,
      eliminado:oneEscuelaDB.eliminado
    }
  return res.status(200).json(oneEscuela)
  } catch (error){
    return res.status(400).send(error.message)
  }
};

module.exports = getEscuela;
