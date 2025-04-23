import { Link } from "react-router-dom"

function CardDojanes_PC(props) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4 border border-gray-300">
      <div className="flex flex-col lg:flex-row items-center p-6">
        <div className="flex-1 mb-4 lg:mb-0">
            <p className="text-lg font-semibold text-gray-800">{props.club}</p>
            <p className="text-sm text-gray-600">Direccion: {props.direccion}</p>
            <p className="text-sm text-gray-600">Horarios: {props.horarios}</p>
            <div className="mt-1">
              <p className="text-sm font-medium text-gray-700">Profesores: </p>
              <ul className="list-disc list-inside text-gray-600">
                {props.profesor.map((profe, index) => (
                  <li key={index}>{profe}</li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-gray-600">Estado: {props.estado}</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link to={`/dojan/${props.id}`}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition">
              Ver
            </button>
          </Link>
          <Link to={`/updatedojan/${props.id}`}>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-md transition">
              Modificar
            </button>
          </Link>
          <Link to={`/deletedojan/${props.id}`}>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition">
              Eliminar
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardDojanes_PC