import { Link, useParams } from "react-router-dom"
import { useFetchEscuela } from "../../hooks/useEscuela"
import userStore from "../../store/loginStore"
import Footer from "../footer/Footer"
import Nav from "../nav/Nav"
import UserNav from "../usernav/UserNav"
import CardEscuela from "../cards/escuelas/CardEscuela"

function EscuelaDetail() {
    const isLogged = userStore((state) => state.isLogged)
    const {id} = useParams()
    const { data:escuela, isLoading, error } = useFetchEscuela(id)

    if(isLoading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error: {error.message}</div>
    }
    if(!isLogged){
        return <p>Debes iniciar sesion como administrador</p>
    }

    return (
        <div>
            <Nav/>
            <UserNav/>
            <div>
                {!escuela ? <h1>No existen datos</h1>:
                <div>
                    <CardEscuela
                    imagen={escuela.imagen}
                    nombre={escuela.nombre}
                    dojan={escuela.dojan}
                    director={escuela.director}
                    />
                </div>}
                <Link to='/pc_escuelas'><button className="botonVolver">🡸 Volver</button></Link>
            </div>
            <Footer/>
        </div>
    )
}

export default EscuelaDetail