import Nav from "../../nav/Nav"
import Footer from "../../footer/Footer"
import UserNav from "../../usernav/UserNav"
import { Link } from "react-router-dom"
import userStore from "../../../store/loginStore"
import { useFetchInscripciones } from "../../../hooks/useInscripciones"
import CardInscripciones from "../../cards/inscripciones/CardInscripciones"
import { useFetchEscuelas } from "../../../hooks/useEscuela"
import { useFetchProfes } from "../../../hooks/useProfesor"
import { useFetchEventos } from "../../../hooks/useEventos"
import inscripcionStore from "../../../store/inscripcionStore"
import { useEffect } from "react"

function Inscripciones_PC() {
  const { data:inscripciones, isLoading, error} = useFetchInscripciones()
  const { data:escuelas } = useFetchEscuelas()
  const { data:profesores } = useFetchProfes()
  const { data:eventos } = useFetchEventos()
  const { isLogged, user } = userStore()
  const getFilteredInscripciones = inscripcionStore((state)=>state.getFilteredInscripciones)
  const {
    setSearchTerm,
    setSelectedEvento,
    setSelectedFechaEvento,
    setSelectedEscuela,
    setSelectedProfesor,
    setSelectedGraduacion,
    setSortBy
  } = inscripcionStore()
  const inscripcionesFiltradas = getFilteredInscripciones()
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

  const setInscripciones = inscripcionStore((state)=>state.setInscripciones)
console.log(inscripcionesFiltradas)
  useEffect(()=>{
    if(inscripciones){
      setInscripciones(inscripciones)
    }
  }, [inscripciones])

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
      {isLogged && (user.nivel==="Director"|| user.nivel==="Profesor") ? 
        <div>
          <UserNav/>
          <div className="min-h-screen px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between mb-6">
              <Link to='/newInscripcion'>
                <button className="mb-4 md:mb-0 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md transition">
                  Agregar Inscripcion
                </button>
              </Link>
              {user.nivel==="Director" && (
                <Link to='/inscripciones_eliminados'>
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
                {escuelas.map((esc, key) => (
                  <option 
                    key={key}
                    value={esc.nombre}>
                      {esc.nombre}
                  </option>
                ))}
              </select>

              <select
                onChange={(e) => setSelectedEvento(e.target.value)}
                className="p-2 border rounded-xl">
                <option value="todas">Todos los Eventos</option>
                {eventos.map((eve, key) => (
                  <option 
                    key={key}
                    value={eve.tipo_de_evento}>
                      {eve.tipo_de_evento}
                  </option>
                ))}
              </select>

              <select
                onChange={(e) => setSelectedFechaEvento(e.target.value)}
                className="p-2 border rounded-xl">
                <option value="todas">Todas las fechas</option>
                {eventos.map((eve, key) => (
                  <option 
                    key={key}
                    value={eve.fecha_del_evento}>
                      {eve.fecha_del_evento}
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
              {profesores.map((profe, key) => (
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
              {inscripcionesFiltradas.map((inscripcion, key)=>
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
                      escuela={inscripcion.escuela}
                      profesor={inscripcion.profesor}
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

export default Inscripciones_PC