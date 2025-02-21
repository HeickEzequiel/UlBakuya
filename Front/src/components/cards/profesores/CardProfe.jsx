
function CardProfe(props) {
  console.log(props)
  return (
    <div>
      <img src={props.imagen} alt="no se puede mostrar la imagen" />
      <h1>{props.nombre} {props.apellido}</h1>
      <h1>Fecha de nacimiento: {props.fecha_de_nacimiento}</h1>
      <h1>Escuela: {props.escuela}</h1>
      <h1>Graduacion: {props.graduacion}</h1>
      <h1>Instructor Mayor: {props.instructor_mayor}</h1>
      <h1>Estado: {props.estado}</h1>

    </div>
  )
}

export default CardProfe