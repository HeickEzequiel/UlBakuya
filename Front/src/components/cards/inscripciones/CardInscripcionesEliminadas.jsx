import { Link, useNavigate } from "react-router-dom"
import api from "../../../api/ubk"

function CardInscripcionesEliminadas(props) {
    const id = props.id
    const navigate = useNavigate()
    
    const handleClick = async () =>{
        try {
            const response = await api.get(`/logicrestoreinscripcion/${id}`)
            alert("Inscripcion restaurada")
            navigate("/pc_inscripciones")
            console.log(response)
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    }

    const handleDelete = async () =>{
      try {
          const response = await api.delete(`/deleteinscripcion/${id}`)
          alert("Evento eliminado de la base de datos")
          navigate("/pc_inscripciones")
          console.log(response)
      } catch (error) {
          console.error('Error al realizar la solicitud:', error);
      }
  }


  return (

<div className="px-6 py-4">
  <table className="w-full border-collapse border border-gray-300 shadow-md rounded-md overflow-hidden">
    <tbody>
      <tr className="even:bg-gray-100 hover:bg-gray-200 transition-colors">
        <td className="px-2 py-2 w-44 border border-gray-300 text-sm">{props.tipo_de_evento}</td>
        <td className="px-2 py-2 w-44 border border-gray-300 text-sm">{props.horarios}</td>
        <td className="px-2 py-2 w-44 border border-gray-300 text-sm">{props.nombre}</td>
        <td className="px-2 py-2 w-44 border border-gray-300 text-sm">{props.apellido}</td>
        <td className="px-2 py-2 w-44 border border-gray-300 text-sm">{props.escuela}</td>
        <td className="px-2 py-2 w-44 border border-gray-300 text-sm">{props.profesor}</td>
        <td className="px-2 py-2 w-44 border border-gray-300 text-sm">{props.graduacion_actual}</td>
        <td className="px-2 py-2 w-44 border border-gray-300 text-sm">{props.proxima_graduacion}</td>

        
        <td className="px-2 py-1">
          <Link to={`/inscripcion/${props.id}`}>
            <button className="bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded">Ver</button>
          </Link>
        </td>
        <td className="px-2 py-1">
          <Link to={`/updateinscripcion/${props.id}`}>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-semibold px-3 py-1 rounded">Modificar</button>
          </Link>
        </td>
        <td className="px-2 py-1">
          <button 
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded"
          >
            Restaurar
          </button>
        </td>
        <td className="px-2 py-1">
          <button 
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded"
          >
            Eliminar
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
  )
}

export default CardInscripcionesEliminadas