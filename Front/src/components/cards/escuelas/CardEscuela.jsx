function CardEscuela(props) {
  return (
    <div>
      <img src={props.imagen} />
      <h1>{props.nombre}</h1>
      <h1>{props.director}</h1>
      <h1>{props.dojan}</h1>
    </div>
  )
}

export default CardEscuela