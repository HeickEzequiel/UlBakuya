import Nav from "../../nav/Nav"
import Footer from "../../footer/Footer"
import UserNav from "../../usernav/UserNav"
import { Link } from "react-router-dom"
import { useFetchEscuelas } from "../../../hooks/useEscuela"
import userStore from "../../../store/loginStore"
import CardEscuelas from "../../cards/escuelas/CardEscuelas"

function Escuelas_PC() {
  const { data:escuelas, isLoading, error} = useFetchEscuelas()
  const { isLogged, user } = userStore()

  if(isLoading){
    return (
      <div>
        <Nav/>
        <div>Loading...</div>
        <Footer/>
      </div>
    )
  }
  
  if(error){
    error.response.status===404 ? 
      <div> 
        <Nav/> 
        <Link to='/newescuela'><button className="boton lg:relative lg:top-20 lg:left-24">Agregar Escuela</button></Link>
        <p className="absolute top-20">No existen escuelas cargadas por favor ingresar la primera</p>
        <Footer/>
      </div>:
      <div>
        <Nav/>
        <div>Error: {error.message}</div>
        <Footer/>
      </div>
  }

  return (
    <div>
      <Nav/>
      {isLogged && user.nivel==="Director"? 
        <div>
          <UserNav/>
          <div className="min-h-screen">
            <Link to='/newescuela'><button className="boton lg:relative lg:top-20 lg:left-24">Agregar Escuela</button></Link>
           <div>{user.nivel==="Director" ? <Link to='/eliminados'><button className="boton lg:relative lg:top-20 lg:left-24"> Ver Eliminados</button></Link>:null}</div> 
            <table className="lg:relative lg:top-24 lg:left-24 lg:border-collapse lg:border-2 lg:border-black">
              <thead>
                <tr>
                  <th className="celda bg-sky-500">Nombre</th>
                  <th className="celda bg-sky-500">Director</th>
                  <th className="celda bg-sky-500">Dojan</th>
                </tr>
              </thead>
            </table>
            {escuelas ? 
              escuelas.map((escuela, key)=>( escuela.eliminado===false?
                <CardEscuelas
                  key={key}
                  id={escuela.id}
                  nombre={escuela.nombre}
                  director={escuela.director}
                  dojan={escuela.dojan}
                  estado={escuela.estado}
                  eliminado={escuela.eliminado}
                />:null
              )):null
            }
          </div>
        </div> : <p>Debes iniciar sesion como administrador para ver el panel de control</p>}
      <Footer/>
    </div>
  )
}

export default Escuelas_PC