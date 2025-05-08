import React from 'react'
import { useFetchProfes } from '../../../hooks/useProfesor'
import userStore from '../../../store/loginStore'
import Nav from '../../nav/Nav'
import Footer from '../../footer/Footer'
import UserNav from '../../usernav/UserNav'
import { Link } from 'react-router-dom'
import CardProfesEliminados from '../../cards/profesores/CardProfesEliminados'

function Profesores_Eliminados (){
  const {data:profesores, isLoading, error} = useFetchProfes()
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
                      <Link to='/pc_profesores'><button className="my-10 ml-10">🡸 Volver</button></Link>
                      <div className="px-6 py-4">
                          <table className=" border-collapse border border-gray-300 shadow-md rounded-md overflow-hidden">
                              <thead>
                                  <tr className="even:bg-gray-100 hover:bg-gray-200 transition-colors">
                                      <th className="px-2 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Nombre</th>
                                      <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Apellido</th>
                                      <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Fecha de Nacimiento</th>
                                      <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Escuela</th>
                                      <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Graduación</th>
                                      <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Fecha de Examen</th>
                                      <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Instructor Mayor</th>
                                      <th className="px-4 py-2 w-44 border border-gray-300 text-sm bg-sky-500">Estado</th>
                                  </tr>
                              </thead>
                          </table>
                      </div>
                          {profesores ? 
                              profesores.map((profesor, key)=>( profesor.eliminado===true ?
                                  <CardProfesEliminados
                                      key={key}
                                      id={profesor.id}
                                      nombre={profesor.nombre}
                                      apellido={profesor.apellido}
                                      fecha_de_nacimiento={profesor.fecha_de_nacimiento}
                                      escuela={profesor.escuela}
                                      graduacion={profesor.graduacion}
                                      fecha_de_examen={profesor.fecha_de_examen}
                                      instructor_mayor={profesor.instructor_mayor}
                                      estado={profesor.estado}
                                      eliminado={profesor.eliminado}
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

export default Profesores_Eliminados