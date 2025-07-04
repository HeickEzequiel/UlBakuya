import Nav from "../../nav/Nav"
import Footer from "../../footer/Footer"
import UserNav from "../../usernav/UserNav"
import { Link } from "react-router-dom"
import { useFetchEscuelas } from "../../../hooks/useEscuela"
import userStore from "../../../store/loginStore"
import CardEscuelas from "../../cards/escuelas/CardEscuelas"
import escuelasStore from "../../../store/escuelaStore"
import { useEffect } from "react"


function Escuelas_PC() {
  const { data:escuelas, isLoading, error} = useFetchEscuelas()
  const { isLogged, user } = userStore()
  const getFilteredEscuelas = escuelasStore((state)=>state.getFilteredEscuelas)
  const {
    setSearchTerm,
    setSelectedDojan,
    setSortBy
  } = escuelasStore()
  const escuelasfiltradas = getFilteredEscuelas()
  const setEscuelas = escuelasStore((state)=> state.setEscuelas)

  useEffect(()=>{
    if(escuelas){
      setEscuelas(escuelas)
    }
  },[escuelas])


  if(isLoading){
    return (
      <div>
        <Nav/>
        <div className="text-center py-12">Cargando...</div>
        <Footer/>
      </div>
    )
  }
  
  if(error){
    return (
      <div>
        <Nav />
        {error.response.status === 404 ? (
          <div className="text-center py-12">
            <Link to='/newescuela'>
              <button className="mb-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition">Agregar Escuela</button>
            </Link>
            <p className="text-gray-700">No existen escuelas cargadas, por favor ingresa la primera.</p>
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
        {isLogged && user.nivel==="Director"? 
          <div>
            <UserNav/>
            <div className="min-h-screen px-6 py-12">
              
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <Link to='/newescuela'>
                  <button className="mb-4 md:mb-0 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md transition">
                    Agregar Escuela
                  </button>
                </Link>
                {user.nivel==="Director" && (
                  <Link to='/escuelas_eliminados'>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg shadow-md transition"> 
                      Ver Eliminados
                    </button>
                  </Link>
                )}
              </div>


              <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      
                <input
                  type="text"
                  placeholder="Buscar por escuela"
                  className="p-2 border rounded-xl"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                <select
                  onChange={(e) => setSelectedDojan(e.target.value)}
                  className="p-2 border rounded-xl">
                  <option value="todas">Todos los Dojangs</option>
                  {Array.isArray(escuelas) && escuelas.map((doj, key) => (
                    (doj.dojan.map((dojan, key)=>(
                      <option 
                        key={key}
                        value={dojan}>
                          {dojan}
                      </option>)))
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
                {Array.isArray(escuelasfiltradas) && escuelasfiltradas.map((escuela, key)=>
                  !escuela.eliminado && (
                <CardEscuelas
                key={key}
                id={escuela.id}
                nombre={escuela.nombre}
                director={escuela.director}
                dojan={escuela.dojan}
                estado={escuela.estado}
                eliminado={escuela.eliminado}
                />)
                )}
            </div>
          </div>
        </div> : <p className="text-center py-12 text-xl">Debes iniciar sesion como administrador para ver el panel de control</p>}
      <Footer/>
    </div>
  )
}

export default Escuelas_PC