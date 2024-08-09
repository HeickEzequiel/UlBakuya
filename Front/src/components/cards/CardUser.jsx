function CardUser (props){
    return(
        <div className=" border-4 border-black ">
            <img className="lg:relative lg:top-2 lg:left-4" src = {props.imagen}/>
            <h1 className="lg:relative lg:-top-44 lg:left-80 lg:w-56"> {props.nombre} {props.apellido}</h1>
            <h1 className="lg:relative lg:-top-40 lg:left-80 lg:w-56">Fecha de nacimiento: {props.fec}</h1>
            <h1 className="lg:relative lg:-top-36 lg:left-80 lg:w-56">Telefono: {props.Tel}</h1>
            <h1 className="lg:relative lg:-top-32 lg:left-80 lg:w-72">email: {props.email}</h1>
        </div>
    )
}
export default CardUser