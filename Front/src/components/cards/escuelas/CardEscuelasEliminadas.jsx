import { Link, useNavigate } from "react-router-dom"
import api from "../../../api/ubk"
function CardEscuelasEliminadas(props) {
    const id = props.id
    const navigate = useNavigate()
    
    const handleClick = async () =>{
        try {
            const response = await api.get(`/logideleteescuela/${id}`)
            alert("Escuela restaurada")
            navigate("/paneldecontrol")
            console.log(response)
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    }

    const handleDelete = async () =>{
      try {
          const response = await api.delete(`/deleteescuela/${id}`)
          alert("Escuela eliminada de la base de datos")
          navigate("/paneldecontrol")
          console.log(response)
      } catch (error) {
          console.error('Error al realizar la solicitud:', error);
      }
  }


  return (

    <div>
      <table className="lg:relative lg:top-24 lg:left-24 lg:border-collapse lg:border-2 lg:border-black">
        <tbody>
          <tr>
            <td className="celda">{props.nombre}</td>
            <td className="celda">{props.director}</td>
            <td className="celda">{props.dojan}</td>
            <td className="celdab"> <Link to={`/escuela/${props.id}`}> <button className="botonv"> Ver</button> </Link></td>
            <td className="celdab"> <Link to={`/updateescuela/${props.id}`}><button className="botonm">Modificar</button></Link></td>
            <td className="celdab"> <button className="botone" onClick={handleClick}>Restaurar</button></td>
            <td className="celdab"> <button className="botone" onClick={handleDelete}>Eliminar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CardEscuelasEliminadas