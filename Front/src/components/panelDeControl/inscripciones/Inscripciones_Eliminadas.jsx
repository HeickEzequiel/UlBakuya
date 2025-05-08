import { Link } from "react-router-dom";
import userStore from "../../../store/loginStore";
import Footer from "../../footer/Footer";
import Nav from "../../nav/Nav";
import UserNav from "../../usernav/UserNav";
import { useFetchInscripciones } from "../../../hooks/useInscripciones";
import CardInscripcionesEliminadas from "../../cards/inscripciones/CardInscripcionesEliminadas";

function Inscripciones_Eliminadas (){
    const {data:inscripciones, isLoading, error} = useFetchInscripciones()
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
                        <Link to='/pc_inscripciones'><button className="my-10 ml-10">🡸 Volver</button></Link>
                        <div className="px-6 py-4">
                            <table className=" border-collapse border border-gray-300 shadow-md rounded-md overflow-hidden">
                                <thead>
                                    <tr className="even:bg-gray-100 hover:bg-gray-200 transition-colors">
                                        <th className="px-2 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Tipo de evento</th>
                                        <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Horario</th>
                                        <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Nombre</th>
                                        <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Apellido</th>
                                        <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Edad</th>
                                        <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Altura</th>
                                        <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Peso</th>
                                        <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Escuela</th>
                                        <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Graduacion Actual</th>
                                        <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Proxima Graduacion</th>
                                        <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Imagen</th>
                                        
                                    </tr>
                                </thead>
                            </table>
                        </div>
                            {inscripciones ? 
                                inscripciones.map((inscripcion, key)=>( inscripcion.eliminado===true ?
                                    <CardInscripcionesEliminadas
                                    key={key}
                                    id={inscripcion.id}
                                    tipo_de_evento={inscripcion.tipo_de_evento}
                                    horarios={inscripcion.horarios}
                                    nombre={inscripcion.nombre}
                                    apellido={inscripcion.apellido}
                                    edad={inscripcion.edad}
                                    altura={inscripcion.altura}
                                    peso={inscripcion.peso}
                                    escuela={inscripcion.escuela}
                                    graduacion_actual={inscripcion.graduacion_actual}
                                    proxima_graduacion={inscripcion.proxima_graduacion}
                                    imagen={inscripcion.imagen}
                                    estado={inscripcion.estado}
                                    eliminado={inscripcion.eliminado}
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

export default Inscripciones_Eliminadas