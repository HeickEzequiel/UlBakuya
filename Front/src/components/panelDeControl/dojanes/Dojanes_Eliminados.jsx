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

  if(isLoading){
      return(
          <div>
              <Nav/>
              <div>Loading...</div>
              <Footer/>
          </div>
      )
  }
  if(error){
      return (
          <div>
              <Nav/>
              <div>Error: {error.message}</div>
              <Footer/>
          </div>
      )
  }

  return (
      <div>
          <Nav/>
              {isLogged && user.nivel==="Director" ?
                  <div>
                      <UserNav/>
                      <div className="min-h-screen my-10">
                      <Link to='/pc_dojanes'><button className="my-10 ml-10">🡸 Volver</button></Link>
                      <div className="px-6 py-4">
                          <table className=" border-collapse border border-gray-300 shadow-md rounded-md overflow-hidden">
                              <thead>
                                  <tr className="even:bg-gray-100 hover:bg-gray-200 transition-colors">
                                      <th className="px-2 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Club</th>
                                      <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Direccion</th>
                                      <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Horarios</th>
                                      <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Profesor</th>
                                      <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Estado</th>
                                  </tr>
                              </thead>
                          </table>
                      </div>
                          {dojanes ? 
                              dojanes.map((dojan, key)=>( dojan.eliminado===true ?
                                  <CardDojanesEliminados
                                      key={key}
                                      id={alumno.id}
                                      nombre={alumno.club}
                                      apellido={alumno.direccion}
                                      escuela={alumno.horarios}
                                      profesor={alumno.profesor}
                                      estado={alumno.estado}
                                      eliminado={alumno.eliminado}
                                  />:null
                              )):null
                          }
                      </div>
                  </div>
              : <p>Debes iniciar sesion como administrador para ver el panel de control</p>}
          <Footer/>
      </div>
  )
}

export default Dojanes_Eliminados