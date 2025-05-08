import { Link } from "react-router-dom"
import { usefetchUsers } from "../../../hooks/useUser"
import userStore from "../../../store/loginStore"
import CardUsuariosEliminados from "../../cards/usuarios/CardUsuariosEliminados"
import Footer from "../../footer/Footer"
import Nav from "../../nav/Nav"
import UserNav from "../../usernav/UserNav"

function Usuarios_Eliminados() {
  const {data:usuarios, isLoading, error} = usefetchUsers()
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
              <Link to='/pc_usuarios'><button className="my-10 ml-10">🡸 Volver</button></Link>
              <div className="px-6 py-4">
                <table className=" border-collapse border border-gray-300 shadow-md rounded-md overflow-hidden">
                  <thead>
                    <tr className="even:bg-gray-100 hover:bg-gray-200 transition-colors">
                      <th className="px-2 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Nombre</th>
                      <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Apellido</th>
                      <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Telefono</th>
                      <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Email</th>
                      <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Nivel</th>
                      <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Estado</th>
                    </tr>
                  </thead>
                </table>
              </div>
              {usuarios ? 
                usuarios.map((usuario, key)=>( usuario.eliminado===true ?
                  <CardUsuariosEliminados
                    key={key}
                    id={usuario.id}
                    nombre={usuario.nombre}
                    apellido={usuario.apellido}
                    telefono={usuario.telefono}
                    email={usuario.email}
                    nivel={usuario.nivel}
                    estado={usuario.estado}
                    eliminado={usuario.eliminado}
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

export default Usuarios_Eliminados