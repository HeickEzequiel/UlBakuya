import { Link, useParams } from "react-router-dom"
import userStore from "../../store/loginStore"
import { useFetchEvento } from "../../hooks/useEventos"
import Nav from "../nav/Nav"
import UserNav from "../usernav/UserNav"
import CardEvento from "../cards/eventos/CardEvento"
import Footer from "../footer/Footer"

function EventoDetail() {
    const isLogged = userStore((state) => state.isLogged)
    const {id} = useParams()
    const { data:evento, isLoading, error } = useFetchEvento(id)

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
                {!evento ? <h1>No existen datos</h1>:
                <div>
                    <CardEvento
                    tipo_de_evento={evento.tipo_de_evento}
                    fecha_del_evento={evento.fecha_del_evento}
                    horario={evento.horario}
                    club={evento.club}
                    direccion={evento.direccion}
                    imagen={evento.imagen}
                    estado={evento.estado}
                    />
                </div>}
                <Link to='/pc_eventos'><button className="boton">🡸 Volver</button></Link>
            </div>
            <Footer/>
        </div>
    )

}

export default EventoDetail