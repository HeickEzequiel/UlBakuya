import { Link } from "react-router-dom"

function CardAlumnos(props) {

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
            <td className="celdab"> <Link to={`/deletealumno/${props.id}`}><button className="botone">Eliminar</button></Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default CardAlumnos