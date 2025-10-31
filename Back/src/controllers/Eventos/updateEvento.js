const { Eventos } = require("../../db.js");

const updateEvento = async (req, res) => {

  try {
    const { id } = req.params;

    const horarios = req.body.horarios
    const horariosArray = horarios.split(',')
        .map(h=>h.trim()).filter(h=>h.length>0)

    const newData = {
      tipo_de_evento: req.body.tipo_de_evento,
      fecha_del_evento: req.body.fecha_del_evento,
      horarios: horariosArray,
      club: req.body.club,
      direccion: req.body.direccion,
      imagen: req.body.imagen,
    };


    const updateData = Object.fromEntries(
      Object.entries(newData).filter(([_, value]) => value)
    );



    if (Object.keys(updateData).length === 0) {
      console.log(" No se enviaron datos para actualizar");
      return res.status(400).json({ error: "No se proporcionaron datos para actualizar" });
    }


    const [updated] = await Eventos.update(updateData, { where: { id } });


    if (updated > 0) {
      console.log(" Evento actualizado correctamente");
      res.json({ status: "Evento actualizado correctamente" });
    } else {
      console.log(" No se encontró evento con ese ID");
      res.status(404).json({ error: "No se encontró ningún evento con ese ID" });
    }

  } catch (error) {
    console.error(" Error atrapado en catch:", error);
    res.status(500).json({ error: "Error interno del servidor", detalles: error.message });
  }
};

module.exports = updateEvento;