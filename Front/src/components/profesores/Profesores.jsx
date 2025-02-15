import React from 'react'
import Nav from '../nav/Nav'
import { useFetchProfes } from '../../hooks/useProfesor'
import Footer from '../footer/Footer'
import CardProfesores from '../cards/profesores/CardProfesores'


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
        <div className='lg:relative lg:grid lg:mt-4 lg:ml-4 lg:mr-4 lg:p-4'>
          {!data.length 
           ? <h1>no existen profesores</h1> 
           : data.map((profes, key)=>(
              <CardProfesores
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