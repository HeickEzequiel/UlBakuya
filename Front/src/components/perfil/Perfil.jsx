import React from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../nav/Nav'
import CardUser from '../cards/usuarios/CardUser'
import { useFetchUser } from '../../hooks/useUser'
import userStore from '../../store/loginStore'
import UserNav from '../usernav/UserNav'
import Footer from '../footer/Footer'

function Perfil() {
  const navigate = useNavigate()
  const { isLogged } = userStore()
  const userData = JSON.parse(localStorage.userData)
  const userID = userData.actualUser
  const { data: usuario, isLoading, error } = useFetchUser(userID)

  const handleUpdate = () => {
    navigate(`/updateuser/${userID}`)
  }

  if (isLoading) {
    return <div className="text-center py-10 text-gray-500">Cargando...</div>
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error.message}</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Nav />
      {isLogged && <UserNav />}

      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {!usuario ? (
            <h1 className="text-center text-xl font-semibold text-gray-700">No existen datos</h1>
          ) : (
            <>
              <CardUser
                imagen={usuario.imagen}
                nombre={usuario.nombre}
                apellido={usuario.apellido}
                fecha_de_nacimiento={usuario.fecha_de_nacimiento}
                tel={usuario.tel}
                email={usuario.email}
                nivel={usuario.nivel}
                escuela={usuario.escuela}
                profesor={usuario.profesor}
                graduacion={usuario.graduacion}
                fecha_de_examen={usuario.fecha_de_examen}
              />

              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={handleUpdate}
                  className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                >
                  Actualizar Perfil
                </button>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Perfil
