import { Link } from "react-router-dom";
import { usefetchUsers } from "../../../hooks/useUser";
import userStore from "../../../store/loginStore";
import Footer from "../../footer/Footer";
import Nav from "../../nav/Nav";
import UserNav from "../../usernav/UserNav";
import CardUsuarios from "../../cards/usuarios/CardUsuarios";

function Usuarios_PC(){
    const {data: usuarios, isLoading, error} = usefetchUsers()
    const { isLogged, user } = userStore()
    if(isLoading){
        return(
            <div>
                <Nav/>
                <div>Loading...</div>
                <Footer/>
            </div>
        )
    }
    console.log(usuarios)
    if(error){
        error.response.status===404 ? 
          <div> 
            <Nav/> 
            <Link to='/newusuario'><button className="boton lg:relative lg:top-20 lg:left-24">Agregar Usuario</button></Link>
            <p className="absolute top-20">No existen Usuarios cargados por favor ingresar el primero</p>
            <Footer/>
          </div>:
          <div>
            <Nav/>
            <div>Error: {error.message}</div>
            <Footer/>
          </div>
      }

    return(
        <div>
            <Nav/>
            {isLogged && user.nivel==="Director"?
            <div>
                <UserNav/>
                <div className="min-h-screen">
                <Link to='/newusuario'><button className="boton lg:relative lg:top-20 lg:left-24">Agregar Usuario</button></Link>
                    <Link to='/usuarioseliminados'><button className="boton lg:relative lg:top-20 lg:left-24">Ver Eliminados</button></Link>
                    <table className="lg:relative lg:top-24 lg:left-24 lg:border-collapse lg:border-2 lg:border-black">
                        <thead>
                            <tr>
                                <th className="celda bg-sky-500">Nombre:</th>
                                <th className="celda bg-sky-500">Apellido:</th>
                                <th className="celda bg-sky-500">Teléfono:</th>
                                <th className="celda bg-sky-500">e-Mail:</th>
                                <th className="celda bg-sky-500">Nivel:</th>
                            </tr>
                        </thead>
                    </table>
                    {usuarios ? 
                        usuarios.map((usuario, key)=>(usuario.eliminado===false?
                            <CardUsuarios
                                key={key}
                                id={usuario.id}
                                nombre={usuario.nombre}
                                apellido={usuario.apellido}
                                telefono={usuario.tel}
                                email={usuario.email}
                                nivel={usuario.nivel}
                            />:null
                        )):null
                        }
                        
                </div>
            </div>: <p>Debes inciar sesion como administrador</p>}
            <Footer/>
        </div>
    )
}

export default Usuarios_PC