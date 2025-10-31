import Nav from "../../nav/Nav"
import Footer from "../../footer/Footer"
import UserNav from "../../usernav/UserNav"
import { Link, useLocation } from "react-router-dom"
import { useFetchInscripciones } from "../../../hooks/useInscripciones"
import { useFetchEscuelas } from "../../../hooks/useEscuela"
import { useFetchProfes } from "../../../hooks/useProfesor"
import { useFetchEventos } from "../../../hooks/useEventos"
import { useEffect, useMemo } from "react"
import userStore from "../../../store/loginStore"
import inscripcionStore from "../../../store/inscripcionStore"
import CardInscripcionesPc from "../../cards/inscripciones/CardInscripcionesPc"

function Inscripciones_PC() {
  const location = useLocation()
  const inscripcionEvento = location.state || {}
  const { data:inscripciones, isLoading, error} = useFetchInscripciones()
  const { data:escuelas } = useFetchEscuelas()
  const { data:profesores } = useFetchProfes()
  const { data:eventos } = useFetchEventos()
  const { isLogged, user } = userStore()
  const getFilteredInscripciones = inscripcionStore((state)=>state.getFilteredInscripciones)
  const {
    setSearchTerm,
    setSelectedEvento,
    setSelectedEscuela,
    setSelectedProfesor,
    setSelectedGraduacion,
    setSortBy
  } = inscripcionStore()
  
  const todasLasInscripciones = getFilteredInscripciones()

  const inscripcionesFiltradas = Array.isArray(todasLasInscripciones)
  ? inscripcionEvento.idEvento
    ?todasLasInscripciones.filter((i) => i.idEvento === inscripcionEvento.idEvento) 
    :todasLasInscripciones
  : [] 

  
  const grados = ["Blanco","Blanco Punta Amarilla","Amarillo","Amarillo Punta Verde",
    "Verde","Verde Punta Azul","Azul","Azul Punta Roja","Rojo","Rojo Punta Negra",
    "1er Dan","2do Dan","3er Dan","4to Dan","5to Dan","6to Dan","7mo Dan","8vo Dan",
    "9no Dan"
  ]
  const evento = ["Torneo","Examen","Curso técnico","Clase especial"]

  const setInscripciones = inscripcionStore((state)=>state.setInscripciones)

  useEffect(()=>{
    if(inscripciones){
      setInscripciones(inscripciones)
    }
  }, [inscripciones, setInscripciones])

  const profesoresMap = useMemo(() => {
    if(!Array.isArray(profesores)) return{}

    return profesores.reduce((map, profesor)=>{
      map[profesor.id] = profesor
      return map
    },{})
  },[profesores])

  const getNombre = (profesorId) =>{
    const profesor = profesoresMap[profesorId]
    return profesor ? `${profesor.nombre} ${profesor.apellido}`: 'Profesor no encontrado'
  }

  const inscripcionesMejoradas = useMemo(()=>{
    if(!Array.isArray(inscripcionesFiltradas)) return[]

    return inscripcionesFiltradas.map(inscripcion => ({
      ...inscripcion,
      profesor: getNombre(inscripcion.profesor)
    }))
  },[inscripcionesFiltradas, profesoresMap])

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
            <Link to='/inscripciones'>
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
      {isLogged && (user.nivel==="Director"|| user.nivel==="Instructor mayor" || user.nivel === "Instructor menor") ? 
        <div>
          <UserNav/>
          <div className="min-h-screen px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between mb-6">
              
              <Link to='/inscripciones'>
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
                {Array.isArray(escuelas) && escuelas.map((esc, key) => (
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
              {inscripcionesMejoradas.map((inscripcion, key)=>
                  !inscripcion.eliminado && (
                    <CardInscripcionesPc
                      key={key}
                      id={inscripcion.id}
                      tipo_de_evento={inscripcion.tipo_de_evento}
                      fecha_del_evento={inscripcion.fecha_del_evento}
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