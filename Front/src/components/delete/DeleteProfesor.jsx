import { useNavigate, useParams } from "react-router-dom"
import Footer from "../footer/Footer"
import Nav from "../nav/Nav"
import UserNav from "../usernav/UserNav"
import api from "../../api/ubk"
import userStore from "../../store/loginStore"



function DeleteProfesor() {
    const { id } = useParams()
    const navigate = useNavigate()
    const {isLogged} = userStore()

    if(!isLogged){
        return <p>Debes iniciar sesion como administrador</p>
    }
    const handleClick = async () =>{
        try {
            const response = await api.get(`/logicdeleteprofesor/${id}`)
            alert("Profesor eliminado")
            navigate("/pc_profesores")
            console.log(response)
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    }
    
    const handleCancel = () => { navigate("/pc_profesores");};
   
    return (
        <div>
      <Nav/>
        <UserNav/>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="bg-white p-6 rounded-2xl shadow-xl text-center space-y-6">
            <p className="text-lg font-semibold text-gray-800">
              ¿Está seguro que desea borrar el profesor?
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
                onClick={handleClick}>
                  SÍ
              </button>
              <button
                className="px-6 py-2 bg-gray-300 text-gray-800 rounded-xl hover:bg-gray-400 transition"
                onClick={handleCancel}>
                  NO
              </button>
            </div>
          </div>
        </div>
      <Footer/>  
    </div>
  )
}

export default DeleteProfesor