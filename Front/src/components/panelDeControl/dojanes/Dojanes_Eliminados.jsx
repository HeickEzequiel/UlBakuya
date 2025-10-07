import React from 'react'
import { useFetchDojanes } from '../../../hooks/useDojan'
import userStore from '../../../store/loginStore'
import Nav from '../../nav/Nav'
import Footer from '../../footer/Footer'
import UserNav from '../../usernav/UserNav'
import { Link } from 'react-router-dom'
import CardDojanesEliminados from '../../cards/dojan/CardDojanesEliminados'

function Dojanes_Eliminados() {
  const {data:dojanes, isLoading, error} = useFetchDojanes()
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
    <div className="flex flex-col min-h-screen">
      <Nav/>
      {isLogged && user.nivel==="Director" ? (
        <div className="flex-grow ">
          <UserNav/>
          <div className="my-6 px-4 sm:px-8">
            <Link to='/pc_dojanes'>
              <button className="mb-4 px-4 py-2 text-sm sm:text-base  bg-sky-500 text-white rounded-lg shadow hover:bg-sky-600 transition">
                🡸 Volver
              </button>
            </Link>

            <div className="mb-6 md:flex md:flex-col md:items-center">
              <h1 className="text-2xl font-bold text-gray-800 mb-1">
                Dojangs eliminados
              </h1>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
                En esta sección podés visualizar todos los dojangs que fueron eliminados lógicamente. 
                Podés restaurarlos si fue un error o eliminarlos definitivamente de la base de datos.
              </p>
            </div>

            <div className="mt-4 space-y-2 md:flex md:flex-col md:items-center md:-ml-16">
              {dojanes && 
                dojanes.map(
                  (dojan, key)=>dojan.eliminado===true && (
                    <CardDojanesEliminados
                      key={key}
                      id={alumno.id}
                      nombre={alumno.club}
                      apellido={alumno.direccion}
                      escuela={alumno.horarios}
                      profesor={alumno.profesor}
                      estado={alumno.estado}
                      eliminado={alumno.eliminado}
                    />
                  )
                )
              }
            </div>  
          </div>
        </div>
      ):(
        <p className="flex-grow flex justify-center items-center text-center text-red-600 font-semibold px-4">
          Debes iniciar sesion como administrador para ver el panel de control
        </p>
        )
      }
      <Footer/>
    </div>
  )
}

export default Dojanes_Eliminados