import React from 'react'
import Nav from '../nav/Nav'
import CardUser from '../cards/CardUser'
import { useFetchUser } from '../../hooks/useUser'
import userStore from '../../store/loginStore'
import UserNav from '../usernav/UserNav'
import Footer from '../footer/Footer'


function Perfil() {
  const { isLogged } = userStore()
  const userData = JSON.parse(localStorage.userData)
  const userID = userData.actualUser
  const { data, isLoading, error } = useFetchUser(userID)



  if(isLoading){
    return <div>Loading...</div>
  }
  if(error){
    return <div>Error: {error.message}</div>
  }
  return (
    <div>
        <Nav/>
        {isLogged ? <UserNav/> : null }
        <div className='lg:relative lg:mt-4 lg:mx-8 lg:min-h-full lg:mb-52 border-2 border-black'>
          {!data ? <h1>No existen datos</h1>: 
            <div>
              <CardUser
                imagen={data.imagen}
                nombre={data.nombre} apellido={data.apellido}
                fecha_de_nacimiento={data.fecha_de_nacimiento}
                Tel={data.tel}
                email={data.email}
                nivel={data.nivel}
                graduacion={data.graduacion}
                profesor={data.profesor}
                escuela={data.escuela}
                fecha_de_examen={data.fecha_de_examen}
              />

            </div> 
          }
          <button className= "lg:relative lg:bottom-10 lg:left-28 boton" type='button'>Actualizar Perfil</button>

        </div>
        <Footer/>
    </div>
  )
}
export default  Perfil

            