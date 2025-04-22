import Nav from "../../nav/Nav"
import Footer from "../../footer/Footer"
import UserNav from "../../usernav/UserNav"
import { Link } from "react-router-dom"
import userStore from "../../../store/loginStore"
import { useFetchInscripciones } from "../../../hooks/useInscripciones"
import CardInscripciones from "../../cards/inscripciones/CardInscripciones"

function Examenes_PC() {
  const { data:inscripciones, isLoading, error} = useFetchInscripciones()
  const { isLogged, user } = userStore()

  if(isLoading){
    return (
      <div>
        <Nav/>
        <div className="text-center py-12">Cargando...</div>
        <Footer/>
      </div>
    )
  }
  
  if (error) {
    return (
      <div>
        <Nav />
        {error.response.status === 404 ? (
          <div className="text-center py-12">
            <Link to='/newinscripcion'>
              <button className="mb-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition">Agregar inscripcion</button>
            </Link>
            <p className="text-gray-700">No existen inscripciones cargadas, por favor ingresa la primera.</p>
          </div>
        ) : (
          <div className="text-center py-12">
            <div>Error: {error.message}</div>
          </div>
        )}
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Nav/>
      {isLogged && user.nivel==="Director"|| user.nivel==="Profesor" ? 
        <div>
          <UserNav/>
          <div className="min-h-screen px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between mb-6">
              <Link to='/Inscripciones'>
                <button className="mb-4 md:mb-0 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md transition">
                  Agregar Inscripcion
                </button>
              </Link>
              {user.nivel==="Director" && (
                <Link to='/eliminados'>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg shadow-md transition">
                    Ver Eliminados
                  </button>
                </Link>
              )}
            </div>

            <div className="min-w-full table-auto border-collapse border border-gray-300 mb-8">
              {inscripciones && inscripciones.map((inscripcion, key)=>
                  !inscripcion.eliminado && (
                    <CardInscripciones
                      key={key}
                      id={inscripcion.id}
                      tipo_de_evento={inscripcion.tipo_de_evento}
                      horarios={inscripcion.horarios}
                      nombre={inscripcion.nombre}
                      apellido={inscripcion.apellido}
                      edad={inscripcion.edad}
                      altura={inscripcion.altura}
                      peso={inscripcion.peso}
                      graduacion_actual={inscripcion.graduacion_actual}
                      proxima_graduacion={inscripcion.proxima_graduacion}
                      imagen={inscripcion.imagen}
                      estado={inscripcion.estado}
                      eliminado={inscripcion.eliminado}
                    />
                  )
                )}
            </div>
          </div>
        </div> : <p className="text-center py-12 text-xl">Debes iniciar sesion como administrador para ver el panel de control</p>}
      <Footer/>
    </div>
  )
}

export default Examenes_PC