import { Link } from "react-router-dom"

function CardInscripciones(props) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4 border border-gray-300">
      <div className="flex flex-col lg:flex-row items-center p-6">
        <div className="flex-1 mb-4 lg:mb-0">
          <p className="text-lg font-semibold text-gray-800">{props.tipo_de_evento}</p>
          <p className="text-sm text-gray-600text-lg font-semibold text-gray-800">Alumno: {props.apellido} {props.nombre}</p>
          <p className="text-sm text-gray-600">Fecha del evento: {props.fecha_del_evento}</p>
          <p className="text-sm text-gray-600">Horario: {props.horarios}</p>
          <p className="text-sm text-gray-600">Edad: {props.edad}</p>
          <p className="text-sm text-gray-600">Altura: {props.altura}</p>
          <p className="text-sm text-gray-600">Peso: {props.peso}</p>
          <p className="text-sm text-gray-600">Escuela: {props.escuela}</p>
          <p className="text-sm text-gray-600">Profesor: {props.profesor}</p>
          <p className="text-sm text-gray-600">Graduacion Actual: {props.graduacion_actual}</p>
          { props.tipo_de_evento==="Examen" ? <p className="text-sm text-gray-600">Proxima Graducion: {props.proxima_graduacion}</p> :null }
          
          
        </div>  
        <div className="flex flex-wrap gap-4">    
          <Link to={`/inscripcion/${props.id}`}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition">
              Ver
            </button>
          </Link>
          <Link to={`/updateinscripcion/${props.id}`}>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-md transition">
              Modificar
            </button>
          </Link>
          <Link to={`/deleteinscripcion/${props.id}`}>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition">
              Eliminar
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default CardInscripciones