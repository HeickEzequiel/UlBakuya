import Nav from "../nav/Nav"
import Footer from "../footer/Footer"
import UserNav from "../usernav/UserNav"
import userStore from "../../store/loginStore"
import { Link } from "react-router-dom"

function Paneldecontrol() {
  const { isLogged, user } = userStore()

  return (
    <div>
      <Nav/>
      {isLogged && user.nivel==="Director"|| user.nivel==="Profesor"
      ? 
        <div>
          <UserNav/>
          <div className="min-h-screen">
            <div className="relative  mt-24 w-fit left-60">
              <Link to='/pc_usuarios'><button className="relative boton mx-2">Usuarios</button></Link> 
              <Link to='/pc_alumnos'><button className="relative boton mx-2">Alumnos</button></Link> 
              <Link to='/pc_profesores'><button className="relative boton mx-2">Profesores</button></Link>
              <Link to='/pc_escuelas'><button className="relative boton mx-2">Escuelas</button></Link>
              <Link to='/pc_dojanes'><button className="relative boton mx-2">Dojan</button></Link>
              <Link to='/pc_examenes'><button className="relative boton mx-2">Eventos</button></Link>
            </div>
          </div>
        </div> 
      : 
        <p>Debes iniciar sesion como administrador para ver el panel de control</p>}
      <Footer/>
    </div>
  )
}

export default Paneldecontrol
          
          
          