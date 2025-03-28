import { Link } from "react-router-dom"

function CardDojanes_PC(props) {
  return (
    <div>
      <table className="lg:relative lg:top-24 lg:left-24 lg:border-collapse lg:border-2 lg:border-black">
        <tbody>
          <tr>
            <td className="celda">{props.club}</td>
            <td className="celda">{props.direccion}</td>
            <td className="celda">{props.horarios}</td>
            <td className="celda">{props.profesores}</td>
            <td className="celda">{props.estado}</td>
            <td className="celdab"> <Link to={`/dojan/${props.id}`}> <button className="botonv"> Ver</button> </Link></td>
            <td className="celdab"> <Link to={`/updatedojan/${props.id}`}><button className="botonm">Modificar</button></Link></td>
            <td className="celdab"> <Link to={`/deletedojan/${props.id}`}><button className="botone">Eliminar</button></Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CardDojanes_PC