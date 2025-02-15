import { useState } from 'react'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
import UserNav from '../usernav/UserNav'
import userStore from '../../store/loginStore'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useFetchEscuela } from '../../hooks/useEscuela'
import CardImagen from '../cards/CardImagen'
import api from '../../api/ubk'

function EscuelaUpdate() {
    const isLogged = userStore((state)=>state.isLogged)
    const { id } = useParams()
    const navigate = useNavigate()
    const { data:escuela, isLoading, error } = useFetchEscuela(id)
    const [escuelaData, setEscuelaData] = useState({
      nombre:"",
      director:"",
      imagen:"",
      dojan:"",
      })
    if(isLoading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error: {error.message}</div>
    }
    if(!isLogged){
        return <p>Debes iniciar sesion como administrador</p>
    }

    const updateEscuela = async (escuelaData) =>{
        try{
            const response = await api.put(`/updateescuela/${id}`, escuelaData,{
                headers:{
                    'Content-Type': 'application/json',
                },
                
            })
        if(response.status===200){
            alert(`escuela actualizada`)
        }else{ 
            alert ('algo salio mal :(')
        }

        }catch(error){
            console.error('error al realizar la solicitud')
            alert('error al actualizar la escuela')
        }   
    
    }

    const handleChange = (event) =>{
        const {name, value} = event.target
        setEscuelaData({...escuelaData, [name]:value})
    }

    const handleSubmit = async (event) =>{
        event.preventDefault()
        try {
            updateEscuela(escuelaData)            
            navigate(`/escuela/${id}`)       
        } catch (error) {
            console.error('Error al realizar la solicitud')
        }
    }
  return (
    <div>
        <Nav/>
        <UserNav/>
        <div>
            <CardImagen imagen = {escuela.imagen}/>
            <form onSubmit={handleSubmit}>
                <p>Ingrese link de la imagen:</p>
                <input
                    className="lg:border-2 lg:border-black lg:rounded-xl" 
                    type="text"
                    key="imagen"
                    name="imagen"
                    value={escuelaData.imagen}
                    placeholder= "ingrese link de la imagen"
                    onChange={handleChange} />
                    <br />
                <p>Nombre:</p>
                <input
                    className="lg:border-2 lg:border-black lg:rounded-xl" 
                    type="text"
                    key="nombre"
                    name="nombre"
                    value={escuelaData.nombre}
                    placeholder={escuela.nombre}
                    onChange={handleChange} />
                    <br />
                <p>Director:</p>
                <input
                    className="lg:border-2 lg:border-black lg:rounded-xl" 
                    type="text"
                    key="director"
                    name="director"
                    value={escuelaData.director}
                    placeholder={escuela.director}
                    onChange={handleChange} />
                    <br />
                <p>Dojan</p>
                <input
                    className="lg:border-2 lg:border-black lg:rounded-xl" 
                    type="text"
                    key="dojan"
                    name="dojan"
                    value={escuelaData.dojan}
                    placeholder={escuela.dojan}
                    onChange={handleChange} />
                    <br />
                
                    <button className="boton">Actualizar Alumno</button>
            </form>
            <Link to='/pc_escuelas'><button className="boton">🡸 Volver</button></Link>
        </div>
        <Footer/>

    </div>
  )
}

export default EscuelaUpdate