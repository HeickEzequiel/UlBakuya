import { Link, useParams } from "react-router-dom"
import userStore from "../../store/loginStore"
import Footer from "../footer/Footer"
import Nav from "../nav/Nav"
import UserNav from "../usernav/UserNav"
import { useFetchUser } from "../../hooks/useUser"
import CardUser from "../cards/usuarios/CardUser"

function UserDetail() {
    const isLogged = userStore((state) => state.isLogged)
    const {id} = useParams()
    const { data:usuario, isLoading, error } = useFetchUser(id)

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
                {!usuario ? <h1>No existen datos</h1>:
                <div>
                    <CardUser
                    imagen={usuario.imagen}
                    nombre={usuario.nombre} apellido={usuario.apellido}
                    fecha_de_nacimiento={usuario.fecha_de_nacimiento}
                    escuela={usuario.escuela}
                    graduacion={usuario.graduacion}
                    fecha_de_examen={usuario.fecha_de_examen}
                    profesor={usuario.profesor}
                    tel={usuario.tel}
                    email={usuario.email}
                    />
                </div>}
                <Link to='/pc_usuarios'><button className="botonVolver">🡸 Volver</button></Link>
            </div>
            <Footer/>
        </div>
    )
}

export default UserDetail