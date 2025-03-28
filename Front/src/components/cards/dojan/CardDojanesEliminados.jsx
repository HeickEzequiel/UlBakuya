import { useNavigate } from 'react-router-dom'

function CardDojanesEliminados() {
  const id = props.id
  const navigate = useNavigate()
  
  const handleClick = async () =>{
      try {
          const response = await api.get(`/logicrestoredojan/${id}`)
          alert("Dojan restaurado")
          navigate("/paneldecontrol")
          console.log(response)
      } catch (error) {
          console.error('Error al realizar la solicitud:', error);
      }
  }

  const handleDelete = async () =>{
    try {
        const response = await api.delete(`/deletedojan/${id}`)
        alert("Dojan eliminado de la base de datos")
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
          <td className="celda">{props.apellido}</td>
          <td className="celda">{props.escuela}</td>
          <td className="celda">{props.graduacion}</td>
          <td className="celda">{props.profesor}</td>
          <td className="celda">{props.estado}</td>
          <td className="celdab"> <Link to={`/alumno/${props.id}`}> <button className="botonv"> Ver</button> </Link></td>
          <td className="celdab"> <Link to={`/updatealumno/${props.id}`}><button className="botonm">Modificar</button></Link></td>
          <td className="celdab"> <button className="botone" onClick={handleClick}>Restaurar</button></td>
          <td className="celdab"> <button className="botone" onClick={handleDelete}>Eliminar</button></td>
        </tr>
      </tbody>
    </table>
  </div>
)
}

export default CardDojanesEliminados