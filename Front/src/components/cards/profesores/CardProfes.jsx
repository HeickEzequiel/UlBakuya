import { Link } from "react-router-dom"
function CardProfes (props){
    return(
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4 border border-gray-300">
          <div className="flex flex-col lg:flex-row items-center p-6">
            <div className="flex-1 mb-4 lg:mb-0">
              <p className="celda">{props.nombre}</p>
              <p className="celda">{props.apellido}</p>
              <p className="celda">{props.escuela}</p>
              <p className="celda">{props.graduacion}</p>
              <p className="celda">{props.instructor_mayor}</p>
              <p className="celda">{props.estado}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to={`/profesor/${props.id}`}> 
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition"> Ver</button> 
              </Link>
              <Link to={`/updateprofesor/${props.id}`}>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-md transition">Modificar</button>
              </Link>
              <Link to={`/deleteprofesor/${props.id}`}>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition">Eliminar</button>
              </Link>
            </div>
          </div>
        </div>
      )
    }
    
export default CardProfes