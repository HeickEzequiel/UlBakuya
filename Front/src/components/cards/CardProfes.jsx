function CardProfes (props){
    return(
        <div className="ml-20">
            <img src = {props.imagen}/>
            <h1> {props.nombre} {props.apellido}</h1>
            <h1>{props.graduacion}</h1>
        </div>
    )
}
export default CardProfes