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
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <p className="text-lg font-semibold text-gray-500 animate-pulse">Cargando profesores...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-red-50">
        <p className="text-lg font-semibold text-red-700">Error: {error.message}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Nav />
      {isLogged ? <UserNav /> : <div className="p-4" />}

      <main className="flex-grow max-w-7xl w-full mx-auto px-6 py-10">
        {data.length === 0 ? (
          <h1 className="text-center text-2xl text-gray-400 font-medium">No existen profesores registrados</h1>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {data.map((profes, key) => !profes.eliminado && (
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
