import { Link } from "react-router-dom"
import { useFetchProfes } from "../../../hooks/useProfesor"
import userStore from "../../../store/loginStore"
import Footer from "../../footer/Footer"
import Nav from "../../nav/Nav"
import UserNav from "../../usernav/UserNav"
import CardProfes from "../../cards/profesores/CardProfes"
import { useFetchEscuelas } from "../../../hooks/useEscuela"
import profesorStore from "../../../store/profesorStore"
import { useEffect } from "react"


function Profesores_PC() {
    const {data:profesores, isLoading, error} = useFetchProfes()
    const {data:escuela } = useFetchEscuelas()
    const {isLogged, user} = userStore()
    const getFilteredProfesores = profesorStore((state)=>state.getFilteredProfesores)
    const {
        setSearchTerm,
        setSelectedEscuela,
        setSelectedGraduacion,
        setSelectedInstructorMayor,
        setSortBy
    } = profesorStore()
    const profesoresFiltrados = getFilteredProfesores()
    const setProfesores = profesorStore((state)=>state.setProfesores)

    useEffect(()=>{
        if(profesores){
            setProfesores(profesores)
        }
    }, [profesores])

    if(isLoading){
        return(
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
                <Link to='/newprofesor'>
                  <button className="boton mb-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition">Agregar Profesor</button>
                </Link>
                <p className="text-gray-700">No existen profesores cargados, por favor ingresa el primero.</p>
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

    const instructoresUnicos = [...new Set(Array.isArray(profesores) && profesores.map(profe => profe.instructor_mayor))];
    const graduacionUnica = [...new Set(Array.isArray(profesores) && profesores.map(profe => profe.graduacion))]  

    return (
    <div>
        <Nav/>
            {isLogged && (user.nivel === "Director" || user.nivel === "Instructor mayor")?(
            <div>
                <UserNav/>
                <div className="min-h-screen px-6 py-12">
                    <div className="flex flex-col md:flex-row justify-between mb-6">
                    <Link to='/newprofesor'>
                        <button className="mb-4 md:mb-0 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md transition">
                            Agregar Profesor
                        </button>
                    </Link>
                    {user.nivel === "Director" && (
                    <Link to='/profesores_eliminados'>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg shadow-md transition">
                            Ver Eliminados
                        </button>
                    </Link>
                    )}
                    </div>

                    <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      
                        <input
                            type="text"
                            placeholder="Buscar por nombre"
                            className="p-2 border rounded-xl"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                        <select
                            onChange={(e) => setSelectedEscuela(e.target.value)}
                            className="p-2 border rounded-xl">
                            <option value="todas">Todas las Escuelas</option>
                            {Array.isArray(escuela) && escuela.map((esc, key) => (
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
                            <option value="todas">Todos las Graduaciones</option>
                            {graduacionUnica.map((profe, key) => (
                                <option
                                    key={key}
                                    value={profe}>
                                    {profe}
                                </option>
                            ))}
                        </select>

                        <select
                            onChange={(e) => setSelectedInstructorMayor(e.target.value)}
                            className="p-2 border rounded-xl">
                            <option value="todas">Todos los Instructores Mayores</option>
                            {instructoresUnicos.map((profe, key) => (
                                <option
                                    key={key}
                                    value={profe}>
                                    {profe}
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
                        {Array.isArray(profesoresFiltrados) && profesoresFiltrados.map((profesor, key)=>
                            !profesor.eliminado &&(
                                <CardProfes
                                    key={key}
                                    id={profesor.id}
                                    nombre={profesor.nombre}
                                    apellido={profesor.apellido}
                                    escuela={profesor.escuela}
                                    graduacion={profesor.graduacion}
                                    instructor_mayor={profesor.instructor_mayor}
                                    estado={profesor.estado}
                                    eliminado={profesor.eliminado}
                                />
                            )    
                        )}
                    </div>
                </div>
            </div>
        ):( 
        <p  className="text-center py-12 text-xl">Debes inciar sesion como administrador</p>)}
        <Footer/>
    </div>
    )
}

export default Profesores_PC