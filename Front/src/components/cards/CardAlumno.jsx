function CardAlumno(props) {
  return (
    <div>
        <img src={props.imagen} />
        <h1>{props.nombre} {props.apellido}</h1>
        <h1>Fecha de nacimiento: {props.fecha_de_nacimiento}</h1>
        <h1>Escuela: {props.escuela}</h1>
        <h1>Graduación: {props.graduacion}</h1>
        <h1>Fecha de examen: {props.fecha_de_examen}</h1>
        <h1>Profesor: {props.profesor}</h1>
    </div>
  )
}

export default CardAlumno