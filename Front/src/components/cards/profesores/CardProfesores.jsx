
function CardProfesores(props) {
   
  return (
    <div className="lg:border-2 lg:border-black lg:w-1/2">
      <img className="lg:relative lg:top-8 lg:left-4 lg:size-52"  src={props.imagen} alt="no se puede ver la imagen" />
      <h1 className="lg:relative lg:-top-44 lg:left-80 lg:w-56" >{props.nombre} {props.apellido}</h1>
      <h1 className="lg:relative lg:-top-40 lg:left-80 lg:w-56">{props.graduacion}</h1>

    </div>
  )
}

export default CardProfesores