import { Link } from 'react-router-dom'
import userStore from '../../../store/loginStore'

function CardDojanes(props) {
  
  const { user } = userStore()

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4 border border-gray-300">
      <div className='flex flex-col lg:flex-row items-center p-6'>
        <div className="flex-1 mb-4 lg:mb-0">
          <p className="text-xl font-semibold text-gray-800 mt-2">{props.club}</p>
          <p className="text-lg text-gray-800 mb-2">Dirección: {props.direccion}</p>
          <p className="text-sm text-gray-600 my-2">Horarios: </p>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {props.horarios.map((hora, index)=>(
            <li key={index}>{hora}</li>
            ))}
          </ul>
          
          <p className="text-sm text-gray-600 my-2">Profesores: </p>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {props.profesor.map((profe, index)=>(
            <li key={index}>{profe}</li>
            ))}
          </ul>
          

        </div>

        <div className="flex flex-wrap gap-4">
          <Link to={`/dojan/${props.id}`}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition">
              Ver
            </button>
          </Link>
          {user.nivel === "Director" || user.nivel === "Instructor mayor" && (
          <Link to={`/updatedojan/${props.id}`}>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-md transition">
              Modificar
            </button>
          </Link>
          )}
          {user.nivel === "Director" || user.nivel === "Instructor mayor" && (
          <Link to={`/deletedojan/${props.id}`}>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition">
              Eliminar
            </button>
          </Link>
          )}
        </div>
      </div>
    </div>
    
  )
}

export default CardDojanes