import React from 'react'
import Nav from '../nav/Nav'
import CardProfes from '../cards/profesores/CardProfes'
import { useFetchProfes } from '../../hooks/useProfesor'
import Footer from '../footer/Footer'


function Profesores() {
  const { data, isLoading, error } = useFetchProfes()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  console.log(data)

  return (
    <div>
      <Nav/>
        <div className='grid mt-4 ml-4 mr-4 p-4'>
          {!data.length 
           ? <h1>no existen profesores</h1> 
           : data.map((profes, key)=>(
              <CardProfes
                key={key}
                nombre={profes.nombre}
                apellido={profes.apellido}
                imagen={profes.imagen}
                graduacion={profes.graduacion}
              />
            ))
          }
        </div>
      <Footer/>
    </div>
  )
}

export default Profesores