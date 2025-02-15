import { Link } from "react-router-dom"

function CardEscuelas(props) {
  return (
    <div>
      <table className="lg:relative lg:top-24 lg:left-24 lg:border-collapse lg:border-2 lg:border-black">
        <tbody>
          <tr>
            <td className="celda">{props.nombre}</td>
            <td className="celda">{props.director}</td>
            <td className="celda">{props.dojan}</td>
            <td className="celdab"><Link to={`/escuelas/${props.id}`}><button className="botonv">Ver</button></Link></td>
            <td className="celdab"><Link to={`/updateescuela/${props.id}`}><button className="botonm">Modificar</button></Link></td>
            <td className="celdab"><Link to={`/deleteescuela/${props.id}`}><button className="botone">Eliminar</button></Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CardEscuelas