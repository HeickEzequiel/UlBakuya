import { useFetchAlumnos } from "../../hooks/useAlumnos";
import userStore from "../../store/loginStore";
import CardAlumnosEliminados from "../cards/CardAlumnosEliminados";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import UserNav from "../usernav/UserNav";

function Eliminados (){
    const {data:alumnos, isLoading, error} = useFetchAlumnos()
    const { isLogged, user } =  userStore()
console.log(isLogged, user)
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
                        <div className="min-h-screen">
                            <table className="lg:relative lg:top-24 lg:left-24 lg:border-collapse lg:border-2 lg:border-black">
                                <thead>
                                    <tr>
                                        <th className="celda bg-sky-500">Nombre</th>
                                        <th className="celda bg-sky-500">Apellido</th>
                                        <th className="celda bg-sky-500">Escuela</th>
                                        <th className="celda bg-sky-500">Graduación</th>
                                        <th className="celda bg-sky-500">Profesor</th>
                                        <th className="celda bg-sky-500">Estado</th>
                                    </tr>
                                </thead>
                            </table>
                            {alumnos ? 
                                alumnos.map((alumno, key)=>( alumno.eliminado===true ?
                                    <CardAlumnosEliminados
                                        key={key}
                                        id={alumno.id}
                                        nombre={alumno.nombre}
                                        apellido={alumno.apellido}
                                        escuela={alumno.escuela}
                                        graduacion={alumno.graduacion}
                                        profesor={alumno.profesor}
                                        estado={alumno.estado}
                                        eliminado={alumno.eliminado}
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

export default Eliminados