import { Link } from "react-router-dom"
import userStore from "../../../store/loginStore"

function CardProfes (props){
  const { user } = userStore()

    return(
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4 border border-gray-300">
          <div className="flex flex-col lg:flex-row md:items-center p-6">
            <div className="flex-1 mb-4 lg:mb-0">
              <p className="text-lg font-semibold text-gray-800">{props.nombre} {props.apellido}</p>
              <p className="text-sm text-gray-600">Escuela: {props.escuela}</p>
              <p className="text-sm text-gray-600">Graduacion: {props.graduacion}</p>
              <p className="text-sm text-gray-600">Instructor mayor: {props.instructor_mayor}</p>
              <p className="text-sm text-gray-600">Estado: {props.estado}</p>
            </div>
            <div className="flex flex-wrap gap-1 md:gap-4">
              <Link to={`/profesor/${props.id}`}> 
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 md:px-4 md:py-2 rounded-lg shadow-md transition"> Ver</button> 
              </Link>
              {(user.nivel === "Director" || user.nivel === "Instructor mayor") && (
              <Link to={`/updateprofesor/${props.id}`}>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white  px-2 py-1 md:px-4 md:py-2 rounded-lg shadow-md transition">Modificar</button>
              </Link>)}
              {(user.nivel === "Director" || user.nivel === "Instructor mayor") && (
              <Link to={`/deleteprofesor/${props.id}`}>
              <button className="bg-red-500 hover:bg-red-600 text-white  px-2 py-1 md:px-4 md:py-2 rounded-lg shadow-md transition">Eliminar</button>
              </Link>
              )}

            </div>
          </div>
        </div>
      )
    }
    
export default (CardProfes)