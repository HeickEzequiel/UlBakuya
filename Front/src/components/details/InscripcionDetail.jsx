import { Link, useParams } from "react-router-dom"
import userStore from "../../store/loginStore"
import { useFetchInscripcion } from "../../hooks/useInscripciones"
import Nav from "../nav/Nav"
import UserNav from "../usernav/UserNav"
import CardInscripcion from "../cards/inscripciones/CardInscripcion"
import Footer from "../footer/Footer"

function InscripcionDetail() {
    const isLogged = userStore((state) => state.isLogged)
    const {id} = useParams()
    const { data:inscripcion, isLoading, error } = useFetchInscripcion(id)

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
                {!inscripcion ? <h1>No existen datos</h1>:
                <div>
                    <CardInscripcion
                    tipo_de_evento={inscripcion.tipo_de_evento}
                    fecha_del_evento={inscripcion.fecha_del_evento}
                    horarios={inscripcion.horarios}
                    nombre={inscripcion.nombre} 
                    apellido={inscripcion.apellido}
                    edad={inscripcion.edad}
                    altura={inscripcion.altura}
                    peso={inscripcion.peso}
                    escuela={inscripcion.escuela}
                    profesor={inscripcion.profesor}
                    graduacion_actual={inscripcion.graduacion_actual}
                    proxima_graduacion={inscripcion.proxima_graduacion}
                    imagen={inscripcion.imagen}
                    estado={inscripcion.estado}
                                     
                    />
                </div>}
                <Link to='/pc_inscripciones'><button className="botonVolver">🡸 Volver</button></Link>
            </div>
            <Footer/>
        </div>
    )
}

export default InscripcionDetail