import { useState } from 'react'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
import UserNav from '../usernav/UserNav'
import userStore from '../../store/loginStore'
import { Link, useNavigate, useParams } from 'react-router-dom'
import CardImagen from '../cards/CardImagen'
import api from '../../api/ubk'
import { useFetchUser } from '../../hooks/useUser'

function UserUpdate() {
    const isLogged = userStore((state)=>state.isLogged)
    const { id } = useParams()
    const navigate = useNavigate()
    const { data:usuario, isLoading, error } = useFetchUser(id)
    const [userData, setUserData] = useState({
        nombre:"",
        apellido:"",
        imagen:"",
        fecha_de_nacimiento:"",
        tel:"",
        email:"",
        password:"",
        nivel:"",
        escuela:"",
        profesor:"",
        graduacion:"",
        fecha_de_examen:"",
        eliminado:"",
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
console.log(userData)
    const updateUser = async (userData) =>{
        try{
            const response = await api.put(`/updateuser/${id}`, userData,{
                headers:{
                    'Content-Type': 'application/json',
                },
                
            })
        if(response.status===200){
            alert(`alumno actualizado`)
        }else{ 
            alert ('algo salio mal :(')
        }

        }catch(error){
            console.error('error al realizar la solicitud')
            alert('error al actualizar el alumno')
        }   
    
    }

    const handleChange = (event) =>{
        const {name, value} = event.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = async (event) =>{
        event.preventDefault()
        try {
            updateUser(userData)            
            navigate(`/user/${id}`)       
        } catch (error) {
            console.error('Error al realizar la solicitud')
        }
    }
  return (
    <div>
        <Nav/>
        <UserNav/>
        <div>
            <CardImagen imagen = {usuario.imagen}/>
            <form onSubmit={handleSubmit}>
                <p>Ingrese link de la imagen:</p>
                <input
                    className="lg:border-2 lg:border-black lg:rounded-xl" 
                    type="text"
                    key="imagen"
                    name="imagen"
                    value={userData.imagen}
                    placeholder= "ingrese link de la imagen"
                    onChange={handleChange} />
                    <br />
                <p>Nombre:</p>
                <input
                    className="lg:border-2 lg:border-black lg:rounded-xl" 
                    type="text"
                    key="nombre"
                    name="nombre"
                    value={userData.nombre}
                    placeholder={usuario.nombre}
                    onChange={handleChange} />
                    <br />
                <p>Apellido</p>
                <input
                    className="lg:border-2 lg:border-black lg:rounded-xl" 
                    type="text"
                    key="apellido"
                    name="apellido"
                    value={userData.apellido}
                    placeholder={usuario.apellido}
                    onChange={handleChange} />
                    <br />
                <p>Fecha de nacimiento</p>
                <input
                    className="lg:border-2 lg:border-black lg:rounded-xl" 
                    type="text"
                    key="fecha_de_nacimiento"
                    name="fecha_de_nacimiento"
                    value={userData.fecha_de_nacimiento}
                    placeholder={usuario.fecha_de_nacimiento}
                    onChange={handleChange} />
                    <br />
                <p>Telefono:</p>
                <input
                    className="lg:border-2 lg:border-black lg:rounded-xl" 
                    type="text"
                    key="tel"
                    name="tel"
                    value={userData.tel}
                    placeholder={usuario.tel}
                    onChange={handleChange} />
                    <br />
                <p>password:</p>
                <input
                    className="lg:border-2 lg:border-black lg:rounded-xl" 
                    type="text"
                    key="password"
                    name="password"
                    value={userData.password}
                    placeholder={usuario.password}
                    onChange={handleChange} />
                    <br />
                <p>nivel:</p>
                <input
                    className="lg:border-2 lg:border-black lg:rounded-xl" 
                    type="text"
                    key="nivel"
                    name="nivel"
                    value={userData.nivel}
                    placeholder={usuario.nivel}
                    onChange={handleChange} />
                    <br />
                <p>Escuela:</p>
                <input
                    className="lg:border-2 lg:border-black lg:rounded-xl" 
                    type="text"
                    key="escuela"
                    name="escuela"
                    value={userData.escuela}
                    placeholder={usuario.escuela}
                    onChange={handleChange} />
                    <br />
                <p>Profesor:</p>
                <input
                    className="lg:border-2 lg:border-black lg:rounded-xl" 
                    type="text"
                    key="profesor"
                    name="profesor"
                    value={userData.profesor}
                    placeholder={usuario.profesor}
                    onChange={handleChange} />
                    <br />
                    
                <p>Graduaciòn:</p>
                <input
                    className="lg:border-2 lg:border-black lg:rounded-xl" 
                    type="text"
                    key="graduacion"
                    name="graduacion"
                    value={userData.graduacion}
                    placeholder={usuario.graduacion}
                    onChange={handleChange} />
                    <br />
                <p>Fecha de examen:</p>
                <input
                    className="lg:border-2 lg:border-black lg:rounded-xl" 
                    type="text"
                    key="fecha_de_examen"
                    name="fecha_de_examen"
                    value={userData.fecha_de_examen}
                    placeholder={usuario.fecha_de_examen}
                    onChange={handleChange} />
                    <br />
                
                <button className="boton">Actualizar Usuario</button>
            </form>
            <Link to='/pc_usuarios'><button className="boton">🡸 Volver</button></Link>
        </div>
        <Footer/>

    </div>
  )
}

export default UserUpdate