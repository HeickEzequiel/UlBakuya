import { useState } from 'react'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
import UserNav from '../usernav/UserNav'
import userStore from '../../store/loginStore'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetchAlumno } from '../../hooks/useAlumnos'
import CardImagen from '../cards/CardImagen'
import api from '../../api/ubk'

function AlumnoUpdate() {
    const isLogged = userStore((state)=>state.isLogged)
    const { id } = useParams()
    const navigate = useNavigate()
    const { data:alumno, isLoading, error } = useFetchAlumno(id)
    const [alumnoData, setAlumnoData] = useState({
        nombre:"",
        apellido:"",
        imagen:"",
        fecha_de_nacimiento:"",
        escuela:"",
        graduacion:"",
        fecha_de_examen:"",
        profesor:"",
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

    const updateAlumno = async (alumnoData) =>{
        try{
            const response = await api.put(`/updatealumno/${id}`, alumnoData,{
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
        setAlumnoData({...alumnoData, [name]:value})
    }

    const handleSubmit = async (event) =>{
        event.preventDefault()
        try {
            updateAlumno(alumnoData)            
            navigate(`/alumno/${id}`)       
        } catch (error) {
            console.error('Error al realizar la solicitud')
        }
    }
  return (
    <div>
        <Nav/>
        <UserNav/>
        <div>
            <CardImagen imagen = {alumno.imagen}/>
            <form onSubmit={handleSubmit}>
                <p>Ingrese link de la imagen:</p>
                <input
                    className="lg:border-2 lg:border-black lg:rounded-xl" 
                    type="text"
                    key="imagen"
                    name="imagen"
                    value={alumnoData.imagen}
                    placeholder= {alumno.imagen}
                    onChange={handleChange} />
                    <br />
                <p>Nombre:</p>
                <input
                    className="lg:border-2 lg:border-black lg:rounded-xl" 
                    type="text"
                    key="nombre"
                    name="nombre"
                    value={alumnoData.nombre}
                    placeholder={alumno.nombre}
                    onChange={handleChange} />
                    <br />
                <p>Apellido</p>
                <input
                    className="lg:border-2 lg:border-black lg:rounded-xl" 
                    type="text"
                    key="apellido"
                    name="apellido"
                    value={alumnoData.apellido}
                    placeholder={alumno.apellido}
                    onChange={handleChange} />
                    <br />
                <p>Fecha de nacimiento</p>
                <input
                    className="lg:border-2 lg:border-black lg:rounded-xl" 
                    type="text"
                    key="fecha_de_nacimiento"
                    name="fecha_de_nacimiento"
                    value={alumnoData.fecha_de_nacimiento}
                    placeholder={alumno.fecha_de_nacimiento}
                    onChange={handleChange} />
                    <br />
                <p>Escuela:</p>
                <input
                    className="lg:border-2 lg:border-black lg:rounded-xl" 
                    type="text"
                    key="escuela"
                    name="escuela"
                    value={alumnoData.escuela}
                    placeholder={alumno.escuela}
                    onChange={handleChange} />
                    <br />
                <p>Graduaciòn:</p>
                <input
                    className="lg:border-2 lg:border-black lg:rounded-xl" 
                    type="text"
                    key="graduacion"
                    name="graduacion"
                    value={alumnoData.graduacion}
                    placeholder={alumno.graduacion}
                    onChange={handleChange} />
                    <br />
                <p>Fecha de examen:</p>
                <input
                    className="lg:border-2 lg:border-black lg:rounded-xl" 
                    type="text"
                    key="fecha_de_examen"
                    name="fecha_de_examen"
                    value={alumnoData.fecha_de_examen}
                    placeholder={alumno.fecha_de_examen}
                    onChange={handleChange} />
                    <br />
                <p>Profesor:</p>
                <input
                    className="lg:border-2 lg:border-black lg:rounded-xl" 
                    type="text"
                    key="profesor"
                    name="profesor"
                    value={alumnoData.profesor}
                    placeholder={alumno.profesor}
                    onChange={handleChange} />
                    <br />
                    <button className="boton">Actualizar Alumno</button>
            </form>

        </div>
        <Footer/>

    </div>
  )
}

export default AlumnoUpdate