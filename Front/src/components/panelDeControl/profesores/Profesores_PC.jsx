import { Link } from "react-router-dom"
import { useFetchProfes } from "../../../hooks/useProfesor"
import userStore from "../../../store/loginStore"
import Footer from "../../footer/Footer"
import Nav from "../../nav/Nav"
import UserNav from "../../usernav/UserNav"
import CardProfes from "../../cards/profesores/CardProfes"


function Profesores_PC() {
    const {data:profesores, isLoading, error} = useFetchProfes()
    const {isLogged, user} = userStore()
console.log(profesores)
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
        error.response.status===404?
        <div>
            <Nav/>
            <Link to='newprofesor'><button className="boton lg:relative lg:top-20 lg:left-24">Agregar Profesor</button></Link>
            <p className="absolute top-20">No existen Profesores cargados, por favor ingrese el primero</p>
            <Footer/>
        </div>:
        <div>
            <Nav/>
            <div>Error: {error.message}</div>
            <Footer/>
        </div>
    }
  return (
    <div>
        <Nav/>
        {isLogged && user.nivel === "Director" || user.nivel === "Profesor" ?
        <div>
            <UserNav/>
            <div className="min-h-screen">
                <Link to='/newprofesor'><button className="boton lg:relative lg:top-20 lg:left-24">Agregar Profesor</button></Link>
                <Link to='/profesoreseliminados'><button className="boton lg:relative lg:top-20 lg:left-24">Ver Eliminados</button></Link>
                    <table className="lg:relative lg:top-24 lg:left-24 lg:border-collapse lg:border-2 lg:border-black">
                        <thead>
                            <tr>
                                <th className="celda bg-sky-500">Nombre:</th>
                                <th className="celda bg-sky-500">Apellido:</th>
                                <th className="celda bg-sky-500">Escuela:</th>
                                <th className="celda bg-sky-500">Graduacion:</th>
                                <th className="celda bg-sky-500">Instructor mayor:</th>
                                <th className="celda bg-sky-500">Estado:</th>
                            </tr>
                        </thead>
                    </table>
                    {profesores ?
                        profesores.map((profesor, key)=>(profesor.eliminado===false?
                            <CardProfes
                                key={key}
                                id={profesor.id}
                                nombre={profesor.nombre}
                                apellido={profesor.apellido}
                                escuela={profesor.escuela}
                                graduacion={profesor.graduacion}
                                instructor_mayor={profesor.instructor_mayor}
                                estado={profesor.estado}
                                eliminado={profesor.eliminado}
                            />:null    
                        )):null
                        }
                </div>
    </div>: <p>Debes inciar sesion como administrador</p>}
    <Footer/>
    </div>
  )
}

export default Profesores_PC