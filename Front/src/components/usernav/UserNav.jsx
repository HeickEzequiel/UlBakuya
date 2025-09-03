import { Link } from "react-router-dom"
import { useFetchUser } from "../../hooks/useUser"

function UserNav() {
  const authState = JSON.parse(localStorage.getItem("authState"))
  const userID = authState?.user?.id

  const { data, isLoading, error } = useFetchUser(userID)

  
  if (!userID) {
    return <div>No hay usuario logueado</div>
  }
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <div className='relative flex items-center bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900  p-4 w-full '>
        <div className="relative items-center left-96">
          <button className='relative inline-block left-32 text-white hover:text-lime-400 mr-4 font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to='/manual'>Manual del practicante</Link></button>
          <button className='relative inline-block left-32 text-white hover:text-lime-400 mr-4 font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to='/examenes'>Examenes</Link></button>
          <button className='relative inline-block left-32 text-white hover:text-lime-400 mr-4 font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to='/torneos'>Torneos</Link></button>
          <button className='relative inline-block left-32 text-white hover:text-lime-400 mr-4 font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to='/seminarios'>Cursos Tecnicos</Link></button>
          <button className='relative inline-block left-32 text-white hover:text-lime-400 mr-4 font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to='/clasesespeciales'>Clases Especiales</Link></button>
          {data.nivel !== "Observador" && data.nivel !== "Alumno" ? (
            <button className='relative inline-block left-96 ml-10 text-white hover:text-lime-400 mr-4 font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
              <Link to='/paneldecontrol'>Panel de control</Link>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default UserNav