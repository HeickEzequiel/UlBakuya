function CardDojan(props) {

  return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 w-full max-w-md mx-auto hover:shadow-xl transition-shadow">
        <img
          src={props.imagen}
          alt={`Imagen del club ${props.club}`}
          className="w-full h-48 object-cover rounded-xl border border-black mb-4"
        />
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Club: {props.club}</h1>
        <h2 className="text-md text-gray-600 mb-2">Escuela: {props.escuela}</h2>
        <h2 className="text-md text-gray-600 mb-2">Direcciòn: {props.direccion}</h2>
        <h2 className="text-md text-gray-600 mb-2">Horarios: {props.horarios}</h2>
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-700">Profesores:</h3>
          <ul className="list-disc list-inside text-gray-600">
            {props.profesor.map((profe, index) => (
              <li key={index}>{profe}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  export default CardDojan;
  