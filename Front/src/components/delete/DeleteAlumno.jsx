import { useNavigate, useParams } from "react-router-dom"
import Footer from "../footer/Footer"
import Nav from "../nav/Nav"
import UserNav from "../usernav/UserNav"
import api from "../../api/ubk"
import userStore from "../../store/loginStore"



function DeleteAlumno() {
    const { id } = useParams()
    const navigate = useNavigate()
    const {isLogged, user} = userStore()


    if(!isLogged){
        return <p>Debes iniciar sesion como administrador</p>
    }


    const handleClick = async () =>{
        try {
            const response = await api.delete(`/deletealumno/${id}`)
            alert("Alumno eliminado de la base de datos")
            navigate("/paneldecontrol")
            console.log(response)
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    }

    const handleClick2 = async () =>{
        try {
            const response = await api.get(`/logicdeletealumno/${id}`)
            alert("Alumno eliminado")
            navigate("/paneldecontrol")
            console.log(response)
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    }
    
    const handleCancel = () => { navigate("/paneldecontrol");};
   
    return (
    <div>
        <Nav/>
        {isLogged && user.nivel==="Director" ? 
            <div>
                <UserNav/>
                <div>
                    <p>Esta seguro que desea eliminar el alumno?</p>
                    <button className="botone" onClick={handleClick2}> SI </button>
                    <button className="botonv" onClick={handleCancel}> NO </button>
                    <button className="botone" onClick={handleClick}> SI BD </button>
                </div> 
            </div>
        :   <div>
                <UserNav/>
                <div>
                    <p>Esta seguro que desea borrar el alumno?</p>
                    <button className="botone" onClick={handleClick2}> SI </button>
                    <button className="botonv" onClick={handleCancel}> NO </button>
                </div> 
            </div>}
        <Footer/>
    </div>
  )
}

export default DeleteAlumno