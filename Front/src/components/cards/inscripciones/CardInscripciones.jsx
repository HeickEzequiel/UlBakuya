import { Link } from "react-router-dom"

function CardInscripciones(props) {
  console.log(props)
  return (
  <Link to="/newInscripcion" state={ props }>
    <div className="bg-blue-500 rounded-xl shadow-md overflow-hidden w-4/5 border flex flex-col md:flex-row">
      <div className="md:w-1/2 w-full h-96 relative">
        <img
          src={props.imagen}
          alt={props.tipo_de_evento}
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>
      <div className="p-6 flex flex-col justify-center md:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800">{props.tipo_de_evento}</h2>
        <p><span className="text-gray-600 font-semibold">Fecha: </span> {props.fecha_del_evento}</p>
        <p><span className="text-gray-600 font-semibold">Horario: </span> {props.horarios}</p>
        <p><span className="text-gray-600 font-semibold">Lugar: </span> {props.club}</p>
        <p><span className="text-gray-600 font-semibold">Dirección: </span> {props.direccion}</p>
        <p className="text-sm text-gray-500 italic">Estado: {props.estado}</p>
      </div>
    </div>
  </Link>
  )
}
export default CardInscripciones