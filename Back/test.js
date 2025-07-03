const { Escuela, Profesor, conn } = require('./src/db');

async function probarRelacion() {
  try {
    await conn.authenticate(); // Verificamos la conexión a la DB

    const escuela = await Escuela.findByPk('2a0eec30-6c9c-4d21-8db8-2f26284a5700', {
      include: [{ model: Profesor, as: 'Profesores' }]
    });

    console.log(JSON.stringify(escuela, null, 2));
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await conn.close(); // Cerramos la conexión al final
  }
}

probarRelacion();