import { Link } from "react-router-dom"

function CardUsuarios(props){

  return(
    <div>
      <table className="lg:relative lg:top-24 lg:left-24 lg:border-collapse lg:border-2 lg:border-black">
        <tbody>
          <tr>
            <td className="celda">{props.nombre}</td>
            <td className="celda">{props.apellido}</td>
            <td className="celda">{props.telefono}</td>
            <td className="celda">{props.email}</td>
            <td className="celda">{props.nivel}</td>
            <td className="celdab"> <Link to={`/user/${props.id}`}> <button className="botonv"> Ver</button> </Link></td>
            <td className="celdab"> <Link to={`/updateuser/${props.id}`}><button className="botonm">Modificar</button></Link></td>
            <td className="celdab"> <Link to={`/deleteuser/${props.id}`}><button className="botone">Eliminar</button></Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default CardUsuarios