import Nav from "../nav/Nav"
import Footer from "../footer/Footer"
import UserNav from "../usernav/UserNav"
import { Link } from "react-router-dom"
import { useFetchAlumnos } from "../../hooks/useAlumnos"
import CardAlumnos from "../cards/CardAlumnos"
import userStore from "../../store/loginStore"

function Paneldecontrol() {
  const { data:alumnos, isLoading, error} = useFetchAlumnos()
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
        <Link to='/newalumno'><button className="boton lg:relative lg:top-20 lg:left-24">Agregar Alumno</button></Link>
        <p className="absolute top-20">No existen Alumnos cargados por favor ingresar el primero</p>
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
            <Link to='/newalumno'><button className="boton lg:relative lg:top-20 lg:left-24">Agregar Alumno</button></Link>
           <div>{user.nivel==="Director" ? <Link to='/eliminados'><button className="boton lg:relative lg:top-20 lg:left-24"> Ver Eliminados</button></Link>:null}</div> 
            <table className="lg:relative lg:top-24 lg:left-24 lg:border-collapse lg:border-2 lg:border-black">
              <thead>
                <tr>
                  <th className="celda bg-sky-500">Nombre</th>
                  <th className="celda bg-sky-500">Apellido</th>
                  <th className="celda bg-sky-500">Escuela</th>
                  <th className="celda bg-sky-500">Graduación</th>
                  <th className="celda bg-sky-500">Profesor</th>
                  <th className="celda bg-sky-500">Estado</th>
                </tr>
              </thead>
            </table>
            {alumnos ? 
              alumnos.map((alumno, key)=>( alumno.eliminado===false?
                <CardAlumnos
                  key={key}
                  id={alumno.id}
                  nombre={alumno.nombre}
                  apellido={alumno.apellido}
                  escuela={alumno.escuela}
                  graduacion={alumno.graduacion}
                  profesor={alumno.profesor}
                  estado={alumno.estado}
                  eliminado={alumno.eliminado}
                />:null
              )):null
            }
          </div>
        </div> : <p>Debes iniciar sesion como administrador para ver el panel de control</p>}
      <Footer/>
    </div>
  )
}

export default Paneldecontrol
          
          
          