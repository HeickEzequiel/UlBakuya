import Nav from "../../nav/Nav";
import Footer from "../../footer/Footer";
import UserNav from "../../usernav/UserNav";
import { Link } from "react-router-dom";
import { useFetchAlumnos } from "../../../hooks/useAlumnos";
import CardAlumnos from "../../cards/alumnos/CardAlumnos";
import userStore from "../../../store/loginStore";
import alumnosStore from "../../../store/alumnosStore";
import { useEffect } from "react";
import { useFetchProfes } from "../../../hooks/useProfesor";
import { useFetchEscuelas } from "../../../hooks/useEscuela";

function Alumnos_PC() {
  const { data: alumnos, isLoading, error } = useFetchAlumnos();
  const { data: profesores } = useFetchProfes();
  const { data: escuelas } = useFetchEscuelas();
  const { isLogged, user } = userStore();
  const getFilteredAlumnos = alumnosStore((state)=>state.getFilteredAlumnos)
  const {
    setSearchTerm,
    setSelectedEscuela,
    setSelectedGraduacion,
    setSelectedProfesor,
    setSortBy
  } = alumnosStore()
  const alumnosFiltrados = getFilteredAlumnos()
  const grados = [
    "Blanco",
    "Blanco Punta Amarilla",
    "Amarillo",
    "Amarillo Punta Verde",
    "Verde",
    "Verde Punta Azul",
    "Azul",
    "Azul Punta Roja",
    "Rojo",
    "Rojo Punta Negra",
    "1er Dan",
    "2do Dan",
    "3er Dan",
    "4to Dan",
    "5to Dan",
    "6to Dan",
    "7mo Dan",
    "8vo Dan",
    "9no Dan"
  ]
  const setAlumnos = alumnosStore((state) => state.setAlumnos);
console.log(alumnosFiltrados)
  useEffect(() => {
    if (alumnos) {
      setAlumnos(alumnos);
    }
  }, [alumnos]);

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
              <button className="mb-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition">Agregar Alumno</button>
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

            <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      
            <input
              type="text"
              placeholder="Buscar por nombre o apellido"
              className="p-2 border rounded-xl"
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
              onChange={(e) => setSelectedEscuela(e.target.value)}
              className="p-2 border rounded-xl">
              <option value="todas">Todas las Escuelas</option>
              {Array.isArray(escuelas) &&  escuelas.map((esc, key) => (
                <option 
                key={key}
                value={esc.nombre}>
                  {esc.nombre}
                </option>
              ))}
            </select>

            <select
              onChange={(e) => setSelectedGraduacion(e.target.value)}
              className="p-2 border rounded-xl">
              <option value="todas">Todas las Graduaciones</option>
              {grados.map((grado,i)=>(
                <option key={i} value={grado}>
                  {grado}
                </option>
              ))}
            </select>

            <select
              onChange={(e) => setSelectedProfesor(e.target.value)}
              className="p-2 border rounded-xl">
              <option value="todas">Todos los Profesores</option>
              {Array.isArray(profesores) && profesores.map((profe, key) => (
                <option
                key={key}
                value={`${profe.nombre} ${profe.apellido}`}>
                    {profe.nombre} {profe.apellido}
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
              {Array.isArray(alumnosFiltrados) && alumnosFiltrados.map((alumno, key) =>
                !alumno.eliminado && (
                  <CardAlumnos
                    key={key}
                    id={alumno.id}
                    nombre={alumno.nombre}
                    apellido={alumno.apellido}
                    graduacion={alumno.graduacion}
                    escuela={alumno.escuelas}
                    profesor={alumno.profesores}
                    estado={alumno.estado}
                    eliminado={alumno.eliminado}
                  />
                )
              )}
            </div>
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