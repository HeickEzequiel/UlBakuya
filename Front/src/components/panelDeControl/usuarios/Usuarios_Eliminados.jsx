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

  if (isLoading) {
    return (
      <div>
        <Nav />
        <div className="flex justify-center items-center h-64 text-lg font-semibold">
          Cargando...
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Nav />
        <div className="flex justify-center items-center h-64 text-red-500">
          Error: {error.message}
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Nav/>
        {isLogged && user.nivel==="Director" ? (
          <div className="flex-grow ">
            <UserNav/>
            <div className="my-6 px-4 sm:px-8">
              <Link to='/pc_usuarios'>
                <button className="mb-4 px-4 py-2 text-sm sm:text-base  bg-sky-500 text-white rounded-lg shadow hover:bg-sky-600 transition">
                  🡸 Volver
                </button>
              </Link>

              <div className="mb-6 md:flex md:flex-col md:items-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-1">
                  Usuarios eliminados
                </h1>
                <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
                  En esta sección podés visualizar todos los usuarios que fueron eliminados lógicamente. 
                  Podés restaurarlos si fue un error o eliminarlos definitivamente de la base de datos.
                </p>
              </div>

              <div className="mt-4 space-y-2 md:flex md:flex-col md:items-center md:-ml-16">
                {usuarios && 
                  usuarios.map(
                    (usuario, key)=>usuario.eliminado === true && (
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
                      />
                    )
                  )
                }
              </div>
            </div>
          </div>
        ):( 
          <p className="flex-grow flex justify-center items-center text-center text-red-600 font-semibold px-4">
          Debes iniciar sesión como administrador para ver el panel de control
        </p>
        )}
      <Footer/>
    </div>
  )
}

export default Usuarios_Eliminados