import { Link } from "react-router-dom"
function CardProfes (props){
    return(
        <div>
          <table className="lg:relative lg:top-24 lg:left-24 lg:border-collapse lg:border-2 lg:border-black">
            <tbody>
              <tr>
                <td className="celda">{props.nombre}</td>
                <td className="celda">{props.apellido}</td>
                <td className="celda">{props.escuela}</td>
                <td className="celda">{props.graduacion}</td>
                <td className="celda">{props.instructor_mayor}</td>
                <td className="celda">{props.estado}</td>
                <td className="celdab"> <Link to={`/profesor/${props.id}`}> <button className="botonv"> Ver</button> </Link></td>
                <td className="celdab"> <Link to={`/updateprofesor/${props.id}`}><button className="botonm">Modificar</button></Link></td>
                <td className="celdab"> <Link to={`/deleteprofesor/${props.id}`}><button className="botone">Eliminar</button></Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
    
export default CardProfes