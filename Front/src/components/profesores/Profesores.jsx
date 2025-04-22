import React from 'react'
import Nav from '../nav/Nav'
import { useFetchProfes } from '../../hooks/useProfesor'
import Footer from '../footer/Footer'
import CardProfesores from '../cards/profesores/CardProfesores'
import UserNav from '../usernav/UserNav'
import userStore from '../../store/loginStore'

function Profesores() {
  const { data, isLoading, error } = useFetchProfes()
  const { isLogged } = userStore()

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-medium text-gray-600">Cargando profesores...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-medium text-red-600">Error: {error.message}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      {isLogged ? <UserNav /> : <div className="p-4" />}
      
      <main className="flex-grow max-w-screen-xl mx-auto px-4 py-8">
        {data.length === 0 ? (
          <h1 className="text-center text-xl text-gray-500">No existen profesores registrados</h1>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((profes, key) => (
              <CardProfesores
                key={key}
                nombre={profes.nombre}
                apellido={profes.apellido}
                imagen={profes.imagen}
                graduacion={profes.graduacion}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default Profesores
