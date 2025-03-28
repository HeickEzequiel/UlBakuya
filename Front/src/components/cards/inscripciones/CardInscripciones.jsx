import { Link } from "react-router-dom"

function CardInscripciones(props) {
console.log(props)
  return (
    <div>
      <table className="lg:relative lg:top-24 lg:left-24 lg:border-collapse lg:border-2 lg:border-black">
        <tbody>
          <tr>
            <td className="celda">{props.tipo_de_evento}</td>
            <td className="celda">{props.horarios}</td>
            <td className="celda">{props.nombre}</td>
            <td className="celda">{props.apellido}</td>
            <td className="celda">{props.edad}</td>
            <td className="celda">{props.altura}</td>
            <td className="celda">{props.peso}</td>
            <td className="celda">{props.graduacion_actual}</td>
            <td className="celda">{props.proxima_graduacion}</td>
            <td className="celda">{props.estado}</td>
            <td className="celdab"> <Link to={`/alumno/${props.id}`}> <button className="botonv"> Ver</button> </Link></td>
            <td className="celdab"> <Link to={`/updatealumno/${props.id}`}><button className="botonm">Modificar</button></Link></td>
            <td className="celdab"> <Link to={`/deletealumno/${props.id}`}><button className="botone">Eliminar</button></Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default CardInscripciones