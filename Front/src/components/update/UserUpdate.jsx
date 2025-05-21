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
            <form 
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl space-y-6 mt-8"
          >
              <h1 className="text-2xl font-bold text-gray-800 text-center">Editar Usuario</h1>
              {[
                  {label:"Link de imagen", name:"imagen", placeholder:"Ingrese link de la imagen"},
                  {label:"Nombre", name:"nombre", placeholder: usuario.nombre},
                  {label:"Apellido", name:"apellido", placeholder: usuario.apellido},
                  {label:"Fecha_de_nacimiento", name:"fecha_de_nacimiento", placeholder: usuario.fecha_de_nacimiento},
                  {label:"Telefono", name:"tel", placeholder: usuario.tel},
                  {label:"Password", name:"password", placeholder: usuario.password},
                  {label:"Nivel", name:"nivel", placeholder: usuario.nivel},
                  {label:"Escuela", name:"escuela", placeholder: usuario.escuela},
                  {label:"Graduacion", name:"graduacion", placeholder: usuario.graduacion},
                  {label:"Fecha_de_examen", name:"fecha_de_examen", placeholder: usuario.fecha_de_examen},
                  {label:"Profesor", name:"profesor", placeholder: usuario.profesor},
              ].map(({label, name, placeholder}) =>(
                  <div key={name}>
                      <label htmlFor={name} className='block text-sm font-medium text-gray-700 mb-1'>
                          {label}
                      </label>
                      <input
                          type='text'
                          id={name}
                          name={name}
                          value={userData[name]}
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
                      Actualizar Usuario
                  </button>
                  <Link to='/pc_usuarios'>
                      <button 
                      type="button"
                      className="bg-gray-300 text-gray-800 font-semibold px-6 py-2 rounded-lg hover:bg-gray-400 transition">
                          🡸 Volver
                      </button>
                  </Link>
              </div>
          </form>
          <Link to='/pc_usuarios'>
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

export default UserUpdate