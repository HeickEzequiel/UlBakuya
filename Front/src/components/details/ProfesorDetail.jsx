import { Link, useParams } from "react-router-dom"
import userStore from "../../store/loginStore"
import { useFetchProfe } from "../../hooks/useProfesor"
import Nav from "../nav/Nav"
import UserNav from "../usernav/UserNav"
import CardProfe from "../cards/profesores/CardProfe"
import Footer from "../footer/Footer"

function ProfesorDetail() {
  const isLogged = userStore((state)=>state.isLogged)
  const {id} = useParams()
  const { data:profe, isLoading, error } = useFetchProfe(id)
console.log(profe)
  if(isLoading){
    return <div>Loading...</div>
  }
  if(error){
    return <div>Error: {error.message}</div>
  }
  if(!isLogged){
    return <p>Debes iniciar sesion como administrador</p>
  }
  return (
    <div>
      <Nav/>
      <UserNav/>
      <div>
        {!profe ? <h1>No existen datos</h1>:
        <div>
          <CardProfe
            imagen={profe.imagen}
            nombre={profe.nombre}
            apellido={profe.apellido}
            fecha_de_nacimiento={profe.fecha_de_nacimiento}
            escuela={profe.escuela}
            graduacion={profe.graduacion}
            instructor_mayor={profe.instructor_mayor}
            estado={profe.estado}
          />
        </div>}
        <Link to='/pc_profesores'><button className="boton">🡸 Volver</button></Link>
      </div>
      <Footer/>
    </div>
  )
}

export default ProfesorDetail