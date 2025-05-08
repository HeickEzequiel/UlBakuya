import { useState } from 'react'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
import UserNav from '../usernav/UserNav'
import userStore from '../../store/loginStore'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useFetchProfe } from '../../hooks/useProfesor'
import CardImagen from '../cards/CardImagen'
import api from '../../api/ubk'

function ProfesorUpdate() {
  const isLogged = userStore((state)=>state.isLogged)
  const { id } = useParams()
  const navigate = useNavigate()
  const { data:profesor, isLoading, error } = useFetchProfe(id)
  const [profesorData, setProfesorData] = useState({
    nombre:"",
    apellido:"",
    imagen:"",
    fecha_de_nacimiento:"",
    escuela:"",
    graduacion:"",
    fecha_de_examen:"",
    instructor_mayor:""
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

  const updateProfesor = async (profesorData) =>{
      try{
          const response = await api.put(`/updateprofesor/${id}`, profesorData,{
              headers:{
                  'Content-Type': 'application/json',
              },
              
          })
      if(response.status===200){
          alert(`profesor actualizado`)
      }else{ 
          alert ('algo salio mal :(')
      }

      }catch(error){
          console.error('error al realizar la solicitud')
          alert('error al actualizar el profesor')
      }   
  
  }

  const handleChange = (event) =>{
      const {name, value} = event.target
      setProfesorData({...profesorData, [name]:value})
  }

  const handleSubmit = async (event) =>{
      event.preventDefault()
      try {
          updateProfesor(profesorData)            
          navigate(`/profesor/${id}`)       
      } catch (error) {
          console.error('Error al realizar la solicitud')
      }
  }
return (
  <div>
      <Nav/>
      <UserNav/>
      <div>
          <CardImagen imagen = {profesor.imagen}/>
          <form 
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl space-y-6 mt-8"
          >
              <h1 className="text-2xl font-bold text-gray-800 text-center">Editar Escuela</h1>
              {[
                  {label:"Link de imagen", name:"imagen", placeholder:"Ingrese link de la imagen"},
                  {label:"Nombre", name:"nombre", placeholder: profesor.nombre},
                  {label:"Apellido", name:"apellido", placeholder: profesor.apellido},
                  {label:"Fecha_de_nacimiento", name:"fecha_de_nacimiento", placeholder: profesor.fecha_de_nacimiento},
                  {label:"Escuela", name:"escuela", placeholder: profesor.escuela},
                  {label:"Graduacion", name:"graduacion", placeholder: profesor.graduacion},
                  {label:"Fecha_de_examen", name:"fecha_de_examen", placeholder: profesor.fecha_de_examen},
                  {label:"Instructor_mayor", name:"instructor_mayor", placeholder: profesor.instructor_mayor},
              ].map(({label, name, placeholder}) =>(
                  <div key={name}>
                      <label htmlFor={name} className='block text-sm font-medium text-gray-700 mb-1'>
                          {label}
                      </label>
                      <input
                          type='text'
                          id={name}
                          name={name}
                          value={profesorData[name]}
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
                      Actualizar Profesor
                  </button>
                  <Link to='/pc_profesores'>
                      <button 
                      type="button"
                      className="bg-gray-300 text-gray-800 font-semibold px-6 py-2 rounded-lg hover:bg-gray-400 transition">
                          🡸 Volver
                      </button>
                  </Link>
              </div>
          </form>
          <Link to='/pc_profesores'>
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

export default ProfesorUpdate