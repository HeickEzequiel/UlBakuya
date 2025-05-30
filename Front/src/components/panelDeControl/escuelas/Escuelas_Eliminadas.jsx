import { Link } from "react-router-dom";
import { useFetchEscuelas } from "../../../hooks/useEscuela";
import userStore from "../../../store/loginStore";
import CardEscuelasEliminadas from "../../cards/escuelas/CardEscuelasEliminadas";
import Footer from "../../footer/Footer";
import Nav from "../../nav/Nav";
import UserNav from "../../usernav/UserNav";

function Escuelas_Eliminadas (){
    const {data:escuelas, isLoading, error} = useFetchEscuelas()
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
                        <div className="min-h-screen">
                        <Link to='/pc_escuelas'><button className="boton">🡸 Volver</button></Link>
                        <div className="px-6 py-4">
                            <table className=" border-collapse border border-gray-300 shadow-md rounded-md overflow-hidden">
                                <thead>
                                    <tr className="even:bg-gray-100 hover:bg-gray-200 transition-colors">
                                        <th className="px-2 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Nombre</th>
                                        <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Director</th>
                                        <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Dojang</th>
                                        <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Estado</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                            {escuelas ? 
                                escuelas.map((escuela, key)=>( escuela.eliminado===true ?
                                    <CardEscuelasEliminadas
                                        key={key}
                                        id={escuela.id}
                                        nombre={escuela.nombre}
                                        director={escuela.director}
                                        dojan={escuela.dojan}
                                        estado={escuela.estado}
                                        eliminado={escuela.eliminado}
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

export default Escuelas_Eliminadas