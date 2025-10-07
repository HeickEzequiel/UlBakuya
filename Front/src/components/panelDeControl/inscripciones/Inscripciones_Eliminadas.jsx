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
    <div  className="flex flex-col min-h-screen">
      <Nav/>
        {isLogged && user.nivel==="Director" ? (
          <div className="flex-grow ">
          <UserNav/>
          <div className="my-6 px-4 sm:px-8">
            <Link to='/pc_inscripciones'>
              <button className="my-10 ml-10">
                🡸 Volver
              </button>
            </Link>
                            
            <div className="mb-6 md:flex md:flex-col md:items-center">
              <h1 className="text-2xl font-bold text-gray-800 mb-1">
                Alumnos eliminados
              </h1>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
                En esta sección podés visualizar todos los alumnos que fueron eliminados lógicamente. 
                Podés restaurarlos si fue un error o eliminarlos definitivamente de la base de datos.
              </p>
            </div>

            <div className="mt-4 space-y-2 md:flex md:flex-col md:items-center md:-ml-16">
              {inscripciones && 
                inscripciones.map(
                  (inscripcion, key) => inscripcion.eliminado === true && (
                    <CardInscripcionesEliminadas
                      key={key}
                      id={inscripcion.id}
                      tipo_de_evento={inscripcion.tipo_de_evento}
                      horarios={inscripcion.horarios}
                      nombre={inscripcion.nombre}
                      apellido={inscripcion.apellido}
                      escuela={inscripcion.escuela}
                      profesor={inscripcion.profesor}
                      graduacion_actual={inscripcion.graduacion_actual}
                      proxima_graduacion={inscripcion.proxima_graduacion}
                      estado={inscripcion.estado}
                      eliminado={inscripcion.eliminado}
                    />
                  )
                )
              }
            </div>
          </div>
        </div>
      ) : (
        <p className="flex-grow flex justify-center items-center text-center text-red-600 font-semibold px-4">
          Debes iniciar sesión como administrador para ver el panel de control
        </p>
        )
      }
    <Footer/>
    </div>
  )
}

export default Inscripciones_Eliminadas