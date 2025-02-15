function CardUser (props){


    return(
        <div >
            <div className="lg:relative lg:left-20">
                <img className="lg:relative lg:top-8 lg:left-4 lg:size-52" src = {props.imagen}/>
                <h1 className="lg:relative lg:-top-44 lg:left-80 lg:w-56"> {props.nombre} {props.apellido}</h1>
                <h1 className="lg:relative lg:-top-40 lg:left-80 lg:w-72">Fecha de nacimiento: {props.fecha_de_nacimiento}</h1>
                <h1 className="lg:relative lg:-top-36 lg:left-80 lg:w-56">Telefono: {props.tel}</h1>
                <h1 className="lg:relative lg:-top-32 lg:left-80 lg:w-72">email: {props.email}</h1>
            </div>
            {props.nivel !== "Observador" ? 
            <div className="lg:relative lg:left-96 lg:bottom-24 lg:ml-16">
                <h1 className="lg:relative lg:-top-44 lg:left-80 lg:w-56">Escuela: {props.escuela}</h1>
                <h1 className="lg:relative lg:-top-40 lg:left-80 lg:w-56">Profesor: {props.profesor}</h1>
                <h1 className="lg:relative lg:-top-36 lg:left-80 lg:w-56">Graduacion: {props.graduacion}</h1>
                <h1 className="lg:relative lg:-top-32 lg:left-80 lg:w-72">Fecha del ultimo examen: {props.fecha_de_examen}</h1>
            </div>
             : null }
             
        </div>
    )
}
export default CardUser