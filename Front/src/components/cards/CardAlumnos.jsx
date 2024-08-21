
function CardAlumnos(props) {
  return (
    <div>
      <table className="lg:relative lg:top-24 lg:left-24 lg:border-collapse lg:border-2 lg:border-black">
            <thead>
              {/* <tr>
                <th className="celda">Nombre</th>
                <th className="celda">Apellido</th>
                <th className="celda">Escuela</th>
                <th className="celda">Graduación</th>
                <th className="celda">Profesor</th>
              </tr> */}
            </thead>
            <tbody>
              <tr>
                <td className="celda">{props.nombre}</td>
                <td className="celda">{props.apellido}</td>
                <td className="celda">{props.escuela}</td>
                <td className="celda">{props.graduacion}</td>
                <td className="celda">{props.profesor}</td>
                <td className="celdab"> <button className="botonv">Ver</button></td>
                <td className="celdab"> <button className="botonm">Modificar</button></td>
                <td className="celdab"> <button className="botone">Eliminar</button></td>
              </tr>
            </tbody>
          </table>
    </div>
  )
}

export default CardAlumnos