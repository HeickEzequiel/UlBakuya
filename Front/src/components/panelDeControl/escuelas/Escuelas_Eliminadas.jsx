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
                            <table className="lg:relative lg:top-24 lg:left-24 lg:border-collapse lg:border-2 lg:border-black">
                                <thead>
                                    <tr>
                                        <th className="celda bg-sky-500">Nombre</th>
                                        <th className="celda bg-sky-500">Director</th>
                                        <th className="celda bg-sky-500">Dojan</th>
                                    </tr>
                                </thead>
                            </table>
                            {escuelas ? 
                                escuelas.map((escuela, key)=>( escuela.eliminado===true ?
                                    <CardEscuelasEliminadas
                                        key={key}
                                        id={alumno.id}
                                        nombre={escuela.nombre}
                                        director={escuela.director}
                                        dojan={escuela.dojan}
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

export default Escuelas_Eliminadas