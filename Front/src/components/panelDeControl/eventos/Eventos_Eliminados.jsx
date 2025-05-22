import { Link } from "react-router-dom"
import { useFetchEventos } from "../../../hooks/useEventos"
import userStore from "../../../store/loginStore"
import Footer from "../../footer/Footer"
import Nav from "../../nav/Nav"
import UserNav from "../../usernav/UserNav"
import CardEventosEliminados from "../../cards/eventos/CardEventosEliminados"

function Eventos_Eliminados() {
    const {data:eventos, isLoading, error} = useFetchEventos()
    const { isLogged, user } =  userStore()

    if(isLoading){
        return(
            <div>
                <Nav/>
                <div>Loading...</div>
                <Footer/>
            </div>
        )
    }
    if(error){
        return (
            <div>
                <Nav/>
                <div>Error: {error.message}</div>
                <Footer/>
            </div>
        )
    }

    return (
        <div>
            <Nav/>
                {isLogged && user.nivel==="Director" ?
                    <div>
                        <UserNav/>
                        <div className="min-h-screen my-10">
                        <Link to='/pc_eventos'><button className="my-10 ml-10">🡸 Volver</button></Link>
                        <div className="px-6 py-4">
                            <table className=" border-collapse border border-gray-300 shadow-md rounded-md overflow-hidden">
                                <thead>
                                    <tr className="even:bg-gray-100 hover:bg-gray-200 transition-colors">
                                        <th className="px-2 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Tipo de evento</th>
                                        <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Fecha de evento</th>
                                        <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Horarios</th>
                                        <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Club</th>
                                        <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Direccion</th>
                                        <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Estado</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                            {eventos ? 
                                eventos.map((evento, key)=>( evento.eliminado===true ?
                                    <CardEventosEliminados
                                        key={key}
                                        id={evento.id}
                                        tipo_de_evento={evento.tipo_de_evento}
                                        fecha_del_evento={evento.fecha_del_evento}
                                        horarios={evento.horarios}
                                        club={evento.club}
                                        direccion={evento.direccion}
                                        estado={evento.estado}
                                        eliminado={evento.eliminado}
                                    />:null
                                )):null
                            }
                        </div>
                    </div>
                : <p>Debes iniciar sesion como administrador para ver el panel de control</p>}
            <Footer/>
        </div>
    )
}

export default Eventos_Eliminados