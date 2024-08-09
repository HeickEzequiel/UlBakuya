import React from 'react'
import Nav from '../nav/Nav'
import Navbot from '../navbot/Navbot'
import CardUser from '../cards/CardUser'
import { useFetchUser } from '../../hooks/useUser'


function Perfil() {
  const userData = JSON.parse(localStorage.userData)
  const userID = userData.actualUser
  const { data, isLoading, error } = useFetchUser(userID)
console.log(data)
  if(isLoading){
    return <div>Loading...</div>
  }
  if(error){
    return <div>Error: {error.message}</div>
  }
  return (
    <div>
        <Nav/>
        <div className='lg:relative lg:mt-4 lg:mx-8 lg:min-h-full lg:mb-52'>
          {!data ? <h1>No existen datos</h1>: 
            <CardUser
            imagen={data.imagen}
            nombre={data.nombre} apellido={data.apellido}
            Fec={data.fecha_de_nacimiento}
            Tel={data.tel}
            email={data.email}
            />
          }
        </div>
        <Navbot/>
    </div>
  )
}
export default  Perfil

            