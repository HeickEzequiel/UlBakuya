import Nav from "../../nav/Nav";
import Footer from "../../footer/Footer";
import UserNav from "../../usernav/UserNav";
import { Link } from "react-router-dom";
import { useFetchAlumnos } from "../../../hooks/useAlumnos";
import CardAlumnos from "../../cards/alumnos/CardAlumnos";
import userStore from "../../../store/loginStore";

function Alumnos_PC() {
  const { data: alumnos, isLoading, error } = useFetchAlumnos();
  const { isLogged, user } = userStore();

  if (isLoading) {
    return (
      <div>
        <Nav />
        <div className="text-center py-12">Cargando...</div>
        <Footer />
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <Nav />
        {error.response.status === 404 ? (
          <div className="text-center py-12">
            <Link to='/newalumno'>
              <button className="boton mb-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition">Agregar Alumno</button>
            </Link>
            <p className="text-gray-700">No existen alumnos cargados, por favor ingresa el primero.</p>
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
      <Nav />
      {isLogged && (user.nivel === "Director" || user.nivel === "Profesor") ? (
        <div>
          <UserNav />
          <div className="min-h-screen px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between mb-6">
              <Link to='/newalumno'>
                <button className="mb-4 md:mb-0 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md transition">
                  Agregar Alumno
                </button>
              </Link>
              {user.nivel === "Director" && (
                <Link to='/alumnos_eliminados'>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg shadow-md transition">
                    Ver Eliminados
                  </button>
                </Link>
              )}
            </div>

            <table className="min-w-full table-auto border-collapse border border-gray-300 mb-8">

              <tbody>
                {alumnos && alumnos.map((alumno, key) =>
                  !alumno.eliminado && (
                    <CardAlumnos
                      key={key}
                      id={alumno.id}
                      nombre={alumno.nombre}
                      apellido={alumno.apellido}
                      escuela={alumno.escuela}
                      graduacion={alumno.graduacion}
                      profesor={alumno.profesor}
                      estado={alumno.estado}
                      eliminado={alumno.eliminado}
                    />
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p className="text-center py-12 text-xl">Debes iniciar sesión como administrador para ver el panel de control</p>
      )}
      <Footer />
    </div>
  );
}

export default Alumnos_PC;