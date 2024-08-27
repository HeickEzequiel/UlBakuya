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
  console.log(user)
  if(isLoading){
    return <div>Loading...</div>
  }
  if(error){
    return <div>Error: {error.message}</div>
  }
  //console.log(data)
  return (
    <div>
      <Nav/>
      {isLogged && user.nivel==="Director"|| user.nivel==="Profesor" ? <div>
      <UserNav/>
        <div className="min-h-screen">
          <button className="boton lg:relative lg:top-20 lg:left-24"><Link to='/newalumno'>Agregar Alumno</Link></button>
          <table className="lg:relative lg:top-24 lg:left-24 lg:border-collapse lg:border-2 lg:border-black">
            <thead>
                <tr>
                  <th className="celda bg-sky-500">Nombre</th>
                  <th className="celda bg-sky-500">Apellido</th>
                  <th className="celda bg-sky-500">Escuela</th>
                  <th className="celda bg-sky-500">Graduación</th>
                  <th className="celda bg-sky-500">Profesor</th>
                </tr>
            </thead>
          </table>
           {!alumnos ? <h1>No existen datos</h1>:
            alumnos.map((alumno, key)=>(
            <CardAlumnos
            key={key}
            id={alumno.id}
            nombre={alumno.nombre}
            apellido={alumno.apellido}
            escuela={alumno.escuela}
            graduacion={alumno.graduacion}
            profesor={alumno.profesor}
          />
          ))}
        </div>
        </div> : <p>Debes iniciar sesion como administrador para ver el panel de control</p>}
      <Footer/>
    </div>
  )
}

export default Paneldecontrol
          
          
          