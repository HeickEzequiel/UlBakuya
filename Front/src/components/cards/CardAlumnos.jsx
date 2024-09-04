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
            <td className="celdab"> <button className="botonv"> <Link to={`/alumno/${props.id}`}>Ver</Link></button></td>
            <td className="celdab"> <button className="botonm"><Link to={`/updatealumno/${props.id}`}>Modificar</Link></button></td>
            <td className="celdab"> <button className="botone"><Link to={`/deletealumno/${props.id}`}>Eliminar</Link></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CardAlumnos