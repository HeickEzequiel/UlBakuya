import { useState } from 'react'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
import UserNav from '../usernav/UserNav'
import userStore from '../../store/loginStore'
import { Link, useNavigate, useParams } from 'react-router-dom'
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
            <form 
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl space-y-6 mt-8"
            >
            <h2 className="text-2xl font-bold text-gray-800 text-center">Editar Alumno</h2>

            {[
                { label: "Link de imagen", name: "imagen", placeholder: "ingrese link de la imagen" },
                { label: "Nombre", name: "nombre", placeholder: alumno.nombre },
                { label: "Apellido", name: "apellido", placeholder: alumno.apellido },
                { label: "Fecha de nacimiento", name: "fecha_de_nacimiento", placeholder: alumno.fecha_de_nacimiento },
                { label: "Escuela", name: "escuela", placeholder: alumno.escuela },
                { label: "Graduación", name: "graduacion", placeholder: alumno.graduacion },
                { label: "Fecha de examen", name: "fecha_de_examen", placeholder: alumno.fecha_de_examen },
                { label: "Profesor", name: "profesor", placeholder: alumno.profesor },
                { label: "Estado", name: "estado", placeholder: alumno.estado }
            ].map(({ label, name, placeholder }) => (
                <div key={name}>
                <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
                <input
                    type="text"
                    id={name}
                    name={name}
                    value={alumnoData[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
            ))}

            <div className="flex justify-between items-center">
                <button 
                    type="submit" 
                    className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                        Actualizar Alumno
                </button>
                <Link to='/pc_alumnos'>
                    <button 
                        type="button"
                        className="bg-gray-300 text-gray-800 font-semibold px-6 py-2 rounded-lg hover:bg-gray-400 transition">
                        🡸 Volver
                    </button>
                </Link>
            </div>
            </form>
            <Link to='/pc_alumnos'>
                    <button 
                        type="button"
                        className="bg-gray-300 text-gray-800 font-semibold px-6 py-2 rounded-lg hover:bg-gray-400 transition">
                        🡸 Volver
                    </button>
                </Link>
        </div>
        <Footer/>
    </div>
  )
}

export default AlumnoUpdate