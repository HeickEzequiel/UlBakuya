function CardUser(props) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg flex flex-col lg:flex-row gap-8 items-start">
      {/* Imagen del usuario */}
      <div className="flex-shrink-0">
        <img
          src={props.imagen}
          alt="Foto de perfil"
          className="w-40 h-40 object-cover rounded-full border-4 border-gray-200"
        />
      </div>

      {/* Información personal */}
      <div className="flex-1 space-y-2">
        <h1 className="text-2xl font-semibold">{props.nombre} {props.apellido}</h1>
        <p className="text-gray-600">📅 Fecha de nacimiento: {props.fecha_de_nacimiento}</p>
        <p className="text-gray-600">📞 Teléfono: {props.tel}</p>
        <p className="text-gray-600">📧 Email: {props.email}</p>

        {/* Información adicional si no es Observador */}
        {props.nivel !== "Observador" && (
          <div className="pt-4 border-t border-gray-300 mt-4 space-y-2">
            <p className="text-gray-600">🏫 Escuela: {props.escuela}</p>
            <p className="text-gray-600">👨‍🏫 Profesor: {props.profesor}</p>
            <p className="text-gray-600">🎓 Graduación: {props.graduacion}</p>
            <p className="text-gray-600">📝 Último examen: {props.fecha_de_examen}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardUser;