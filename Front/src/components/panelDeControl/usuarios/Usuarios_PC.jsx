import { Link } from "react-router-dom";
import { usefetchUsers } from "../../../hooks/useUser";
import userStore from "../../../store/loginStore";
import Footer from "../../footer/Footer";
import Nav from "../../nav/Nav";
import UserNav from "../../usernav/UserNav";
import CardUsuarios from "../../cards/usuarios/CardUsuarios";
import usuarioStore from "../../../store/usuarioStore";
import { useEffect } from "react";

function Usuarios_PC(){
    const {data: usuarios, isLoading, error} = usefetchUsers()
    const { isLogged, user } = userStore()
    const getFilteredUsuarios = usuarioStore((state)=>state.getFilteredUsuarios)
    const {
        setSearchTerm,
        setSelectedNivel,
        setSortBy
    } = usuarioStore()
    const usuariosFiltrados = getFilteredUsuarios()
    const setUsuarios = usuarioStore((state) => state.setUsuarios)

    useEffect(()=> {
        if(usuarios){
            setUsuarios(usuarios)
        }
    }, [usuarios])

    if(isLoading){
        return(
            <div>
                <Nav/>
                <div className="text-center py-12">Cargando...</div>
                <Footer/>
            </div>
        )
    }
    
    if(error){
        error.response.status===404 ? 
          <div> 
            <Nav/> 
            <Link to='/newusuario'><button className="mb-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition">Agregar Usuario</button></Link>
            <p className="text-gray-700">No existen Usuarios cargados por favor ingresar el primero</p>
            <Footer/>
          </div>:
          <div>
            <Nav/>
            <div className="text-center py-12">Error: {error.message}</div>
            <Footer/>
          </div>
      }

    return(
        <div>
            <Nav/>
            {isLogged && user.nivel==="Director"?
            <div>
                <UserNav/>
                <div className="min-h-screen px-6 py-12">
                    <div className="flex flex-col md:flex-row justify-between mb-6">
                        <Link to='/newusuario'>
                            <button className="mb-4 md:mb-0 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md transition">
                                Agregar Usuario
                            </button>
                        </Link>
                        <Link to='/usuarios_eliminados'>
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg shadow-md transition">
                                Ver Eliminados
                            </button>
                        </Link>
                    </div>

                    <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      
                <input
                  type="text"
                  placeholder="Buscar por nombre"
                  className="p-2 border rounded-xl"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                <select
                  onChange={(e) => setSelectedNivel(e.target.value)}
                  className="p-2 border rounded-xl">
                  <option value="todas">Todas los niveles</option>
                  {usuarios.map((usu, key) => (
                    <option 
                        key={key}
                        value={usu.nivel}>
                            {usu.nivel}
                    </option>
                    ))}
                </select>


                <select
                  onChange={(e) => setSortBy(e.target.value)}
                  className="p-2 border rounded-xl">
                  <option value="nombre-asc">Nombre A-Z</option>
                  <option value="nombre-desc">Nombre Z-A</option>
                </select>
              </div>
                    
                    <div className="min-w-full table-auto border-collapse border border-gray-300 mb-8">
                        {usuariosFiltrados.map((usuario, key)=>
                            !usuario.eliminado &&(
                                <CardUsuarios
                                    key={key}
                                    id={usuario.id}
                                    nombre={usuario.nombre}
                                    apellido={usuario.apellido}
                                    telefono={usuario.tel}
                                    email={usuario.email}
                                    nivel={usuario.nivel}
                                />
                            )
                        )}
                    </div>                         
                </div>
            </div>: <p className="text-center py-12 text-xl">Debes inciar sesion como administrador</p>}
            <Footer/>
        </div>
    )
}

export default Usuarios_PC