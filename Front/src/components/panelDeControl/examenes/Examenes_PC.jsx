import Nav from "../../nav/Nav"
import Footer from "../../footer/Footer"
import UserNav from "../../usernav/UserNav"
import { Link } from "react-router-dom"
import userStore from "../../../store/loginStore"
import { useFetchInscripciones } from "../../../hooks/useInscripciones"
import CardInscripciones from "../../cards/inscripciones/CardInscripciones"

function Examenes_PC() {
  const { data:inscripciones, isLoading, error} = useFetchInscripciones()
  const { isLogged, user } = userStore()
console.log(inscripciones)
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
        <Link to='/Inscripciones'><button className="boton lg:relative lg:top-20 lg:left-24">Agregar nueva inscripcion</button></Link>
        <p className="absolute top-20">No existen inscripciones cargadas por favor ingresar la primera</p>
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
      {isLogged && user.nivel==="Director"|| user.nivel==="Profesor" ? 
        <div>
          <UserNav/>
          <div className="min-h-screen">
            <Link to='/Inscripciones'><button className="boton lg:relative lg:top-20 lg:left-24">Agregar Inscripcion</button></Link>
           <div>{user.nivel==="Director" ? <Link to='/eliminados'><button className="boton lg:relative lg:top-20 lg:left-24"> Ver Eliminados</button></Link>:null}</div> 
            <table className="lg:relative lg:top-24 lg:left-24 lg:border-collapse lg:border-2 lg:border-black">
              <thead>
                <tr>
                  <th className="celda bg-sky-500">Tipo de evento</th>
                  <th className="celda bg-sky-500">Horario</th>
                  <th className="celda bg-sky-500">Nombre</th>
                  <th className="celda bg-sky-500">Apellido</th>
                  <th className="celda bg-sky-500">Edad</th>
                  <th className="celda bg-sky-500">Altura</th>
                  <th className="celda bg-sky-500">Peso</th>
                  <th className="celda bg-sky-500">Graduacion actual</th>
                  <th className="celda bg-sky-500">Proxima graduacion</th>
                  <th className="celda bg-sky-500">Imagen</th>
                </tr>
              </thead>
            </table>
            {inscripciones ? 
              inscripciones.map((inscripcion, key)=>( inscripcion.eliminado===false?
                <CardInscripciones
                  key={key}
                  id={inscripcion.id}
                  tipo_de_evento={inscripcion.tipo_de_evento}
                  horarios={inscripcion.horarios}
                  nombre={inscripcion.nombre}
                  apellido={inscripcion.apellido}
                  edad={inscripcion.edad}
                  altura={inscripcion.altura}
                  peso={inscripcion.peso}
                  graduacion_actual={inscripcion.graduacion_actual}
                  proxima_graduacion={inscripcion.proxima_graduacion}
                  imagen={inscripcion.imagen}
                  estado={inscripcion.estado}
                  eliminado={inscripcion.eliminado}
                />:null
              )):null
            }
          </div>
        </div> : <p>Debes iniciar sesion como administrador para ver el panel de control</p>}
      <Footer/>
    </div>
  )
}

export default Examenes_PC