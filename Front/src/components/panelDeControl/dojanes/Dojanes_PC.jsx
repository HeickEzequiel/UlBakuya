import { useFetchDojanes } from '../../../hooks/useDojan'
import userStore from '../../../store/loginStore'
import Nav from '../../nav/Nav'
import UserNav from '../../usernav/UserNav'
import Footer from '../../footer/Footer'
import { Link } from 'react-router-dom'
import CardDojanes from '../../cards/dojan/CardDojanes'
import dojanStore from '../../../store/dojanStore'
import { useEffect } from 'react'
import { useFetchEscuelas } from '../../../hooks/useEscuela'
import { useFetchProfes } from '../../../hooks/useProfesor'

function Dojanes_PC() {
  const { data: dojanes, isLoading, error } = useFetchDojanes()
  const { data: escuelas } = useFetchEscuelas()
  const { data: profesores } = useFetchProfes()
  const { isLogged, user } = userStore()
  const getFilteredDojanes = dojanStore((state)=>state.getFilteredDojanes)
  const {
    setSearchTerm,
    setSelectedProfesor,
    setSelectedEscuela,
    setSortBy
  } = dojanStore()
  const dojanesFiltrados = getFilteredDojanes()
  const setDojanes = dojanStore((state) => state.setDojanes)
console.log(dojanesFiltrados)
  useEffect(() => {
    if(dojanes){
      setDojanes(dojanes)
    }
  }, [dojanes])


  if(isLoading){
    return (
      <div>
        <Nav/>
        <div className='text-center py-12'>Cargando...</div>
        <Footer/>
      </div>
    )
  }
  if(error){
    return(
    <div> 
        <Nav/> 
        {error.response.status===404 ?(
          <div className='text-center py-12'> 
            <Link to='/newdojan'>
              <button className="mb-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition">
                Agregar Dojan
              </button>
            </Link>
            <p className="absolute top-20">No existen Dojanes cargados por favor ingresar el primero</p>
          </div>
        ):(
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
        {isLogged && (user.nivel==="Director"|| user.nivel==="Profesor")?
          <div>
            <UserNav/>
            <div className="min-h-screen px-6 py-12">
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <Link to='/newdojan'>
                  <button className="mb-4 md:mb-0 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md transition">
                    Agregar Dojan
                  </button>
                </Link>
                {user.nivel==="Director" && (
                  <Link to='/dojanes_eliminados'>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg shadow-md transition">
                      Ver Eliminados
                    </button>
                  </Link>
                )}
              </div>

              <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      
                <input
                  type="text"
                  placeholder="Buscar por dojang"
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

              <div className='min-w-full table-auto border-collapse border border-gray-300 mb-8'>
                  {Array.isArray(dojanesFiltrados) && dojanesFiltrados.map((dojan, key) =>
                  !dojan.eliminado && (
                    <CardDojanes
                      key={key}
                      id={dojan.id}
                      imagen={dojan.imagen}
                      club={dojan.club}
                      direccion={dojan.direccion}
                      horarios={dojan.horarios}
                      profesor={dojan.profesor}
                      estado={dojan.estado}
                      eliminado={dojan.eliminado}
                    />
                  )
                  )}
              </div>
            </div>
          </div>: <p className="text-center py-12 text-xl">Debes iniciar sesion como administrador para acceder al panel de control</p>
        }
      <Footer/>
    </div>
  )
}

export default Dojanes_PC