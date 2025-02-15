import { useNavigate, useParams } from "react-router-dom"
import Footer from "../footer/Footer"
import Nav from "../nav/Nav"
import UserNav from "../usernav/UserNav"
import api from "../../api/ubk"
import userStore from "../../store/loginStore"



function DeleteEscuela() {
    const { id } = useParams()
    const navigate = useNavigate()
    const {isLogged} = userStore()

    if(!isLogged){
        return <p>Debes iniciar sesion como administrador</p>
    }
    const handleClick = async () =>{
        try {
            const response = await api.get(`/logicdeleteescuela/${id}`)
            alert("Escuela eliminada")
            navigate("/pc_escuelas")
            console.log(response)
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    }
    
    const handleCancel = () => { navigate("/paneldecontrol");};
   
    return (
    <div>
        <Nav/>
            <UserNav/>
            <div>
                <p>Esta seguro que desea borrar la escuela?</p>
                <button className="botone" onClick={handleClick}> SI </button>
                <button className="botonv" onClick={handleCancel}> NO </button>
            </div> 
            
        <Footer/>
    </div>
  )
}

export default DeleteEscuela