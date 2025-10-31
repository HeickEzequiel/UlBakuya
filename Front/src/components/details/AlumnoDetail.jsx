import { Link, useParams } from "react-router-dom"
import { useFetchAlumno } from "../../hooks/useAlumnos"
import userStore from "../../store/loginStore"
import Footer from "../footer/Footer"
import Nav from "../nav/Nav"
import UserNav from "../usernav/UserNav"
import CardAlumno from "../cards/alumnos/CardAlumno"

function AlumnoDetail() {
    const isLogged = userStore((state) => state.isLogged)
    const {id} = useParams()
    const { data:alumno, isLoading, error } = useFetchAlumno(id)

    if(isLoading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error: {error.message}</div>
    }
    if(!isLogged){
        return <p>Debes iniciar sesion como administrador</p>
    }
console.log(alumno)
    return (
        <div>
            <Nav/>
            <UserNav/>
            <div>
                {!alumno ? <h1>No existen datos</h1>:
                <div>
                    <CardAlumno
                    imagen={alumno.imagen}
                    nombre={alumno.nombre} apellido={alumno.apellido}
                    fecha_de_nacimiento={alumno.fecha_de_nacimiento}
                    escuelas={alumno.escuelas}
                    graduacion={alumno.graduacion}
                    fecha_de_examen={alumno.fecha_de_examen}
                    profesores={alumno.profesores}
                    estado={alumno.estado}
                    />
                </div>}
                <Link to="/pc_alumnos">
                    <button className="botonVolver">
                        🡸 Volver
                    </button>
                </Link>
            </div>
            <Footer/>
        </div>
    )
}

export default AlumnoDetail