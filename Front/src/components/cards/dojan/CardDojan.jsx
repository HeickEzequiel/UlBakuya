function CardDojan (props){
    return(
        <div className="ml-20">
            <img src = {props.imagen}/>
            <h1> {props.club} </h1>
            <h1>{props.direccion}</h1>
            <h1>{props.profesor[0]}</h1>
            <h1>{props.profesor[1]}</h1>
        </div>
    )
}
export default CardDojan