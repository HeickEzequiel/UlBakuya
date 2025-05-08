import { Link } from "react-router-dom";
import { useFetchAlumnos } from "../../../hooks/useAlumnos";
import userStore from "../../../store/loginStore";
import CardAlumnosEliminados from "../../cards/alumnos/CardAlumnosEliminados";
import Footer from "../../footer/Footer";
import Nav from "../../nav/Nav";
import UserNav from "../../usernav/UserNav";

function Alumnos_Eliminados (){
    const {data:alumnos, isLoading, error} = useFetchAlumnos()
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
                        <Link to='/pc_alumnos'><button className="my-10 ml-10">🡸 Volver</button></Link>
                        <div className="px-6 py-4">
                            <table className=" border-collapse border border-gray-300 shadow-md rounded-md overflow-hidden">
                                <thead>
                                    <tr className="even:bg-gray-100 hover:bg-gray-200 transition-colors">
                                        <th className="px-2 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Nombre</th>
                                        <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Apellido</th>
                                        <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Escuela</th>
                                        <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Graduación</th>
                                        <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Profesor</th>
                                        <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Estado</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
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

export default Alumnos_Eliminados