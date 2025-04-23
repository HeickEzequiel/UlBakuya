function CardEscuela(props) {
  console.log(props)
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 w-full max-w-md mx-auto hover:shadow-xl transition-shadow">
      <img 
      src={props.imagen}
      alt={`Escudo de la escuela ${props.nombre}`}
      className="w-full h-48 object-contain rounded-xl border border-black mb-4"
      />
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">{props.nombre}</h1>
      <h1 className="text-md text-gray-600 mb-2">Director: {props.director}</h1>
      <h1 className="text-sm font-medium text-gray-700">Dojan:</h1>
      <ul className="list-disc list-inside text-gray-600">
        {props.dojan.map((dojan, index)=>(
          <li key={index}>{dojan}</li>
        ))}
      </ul>

    </div>
  )
}

export default CardEscuela