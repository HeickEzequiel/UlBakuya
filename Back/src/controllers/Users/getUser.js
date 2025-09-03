const {Usuario} = require("../../db.js");
const getUser = async (req, res) => {

  try{
    const oneUsuarioDB = await Usuario.findByPk(req.params.id)
    const oneUsuario = {
      id: oneUsuarioDB.id,
      nombre: oneUsuarioDB.nombre,
      apellido: oneUsuarioDB.apellido,
      imagen: oneUsuarioDB.imagen,
      fecha_de_nacimiento: oneUsuarioDB.fecha_de_nacimiento,
      tel: oneUsuarioDB.tel,
      email: oneUsuarioDB.email,
      password: oneUsuarioDB.password,
      nivel: oneUsuarioDB.nivel,
      escuela: oneUsuarioDB.escuela,
      graduacion: oneUsuarioDB.graduacion,
      fecha_de_examen: oneUsuarioDB.fecha_de_examen,
      profesor: oneUsuarioDB.profesor
    }
      if(oneUsuario.imagen === null){
          oneUsuario.imagen = "https://res.cloudinary.com/damoqjwmk/image/upload/v1723139453/no%20image.png"
      }

  return res.status(200).json(oneUsuario)
  } catch (error){
    return res.status(400).send(error.message)
  }
};

module.exports = getUser;