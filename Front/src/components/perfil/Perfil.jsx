import React from 'react'
import Nav from '../nav/Nav'
import CardUser from '../cards/usuarios/CardUser'
import { useFetchUser } from '../../hooks/useUser'
import userStore from '../../store/loginStore'
import UserNav from '../usernav/UserNav'
import Footer from '../footer/Footer'



function Perfil() {
  const { isLogged } = userStore()
  const userData = JSON.parse(localStorage.userData)
  const userID = userData.actualUser
  const name = userData.apellido
  const { data:usuario, isLoading, error } = useFetchUser(userID)


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
          {!usuario ? <h1>No existen datos</h1>: 
            <div>
              <CardUser
                imagen={usuario.imagen}
                nombre={usuario.nombre} apellido={usuario.apellido}
                fecha_de_nacimiento={usuario.fecha_de_nacimiento}
                Tel={usuario.tel}
                email={usuario.email}
                nivel={usuario.nivel}
                escuela={usuario.escuela}
                profesor={usuario.profesor}
                graduacion={usuario.graduacion}
                fecha_de_examen={usuario.fecha_de_examen}
                />
              </div>} 

          <button className= "lg:relative lg:bottom-10 lg:left-28 boton" type='button'>Actualizar Perfil</button>

        </div>
        <Footer/>
    </div>
  )
}
export default  Perfil

            