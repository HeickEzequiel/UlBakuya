import { Link, useNavigate, useParams } from "react-router-dom"
import userStore from "../../store/loginStore"
import { useFetchInscripcion } from "../../hooks/useInscripciones"
import { useState } from "react"
import Nav from "../nav/Nav"
import UserNav from "../usernav/UserNav"
import CardImagen from "../cards/CardImagen"
import Footer from "../footer/Footer"
import api from "../../api/ubk"
import { useEffect } from "react"

function InscripcionUpdate() {
  const isLogged = userStore((state)=>state.isLogged)
    const { id } = useParams()
    const navigate = useNavigate()
    const { data:inscripcion, isLoading, error } = useFetchInscripcion(id)
    const [inscripcionData, setInscripcionData] = useState({
      tipo_de_evento:"",
      fecha_del_evento:"",
      horarios:"",
      nombre:"",
      apellido:"",
      edad:"",
      altura:"",
      peso:"",
      escuela:"",
      profesor: [],
      graduacion_actual:"",
      proxima_graduacion:"",
      imagen:"",
      estado:"",
      eliminado:""
      })

      const [ file, setFile ] = useState(null)

      useEffect(() => {
        if(inscripcion){
            setInscripcionData({
                tipo_de_evento: inscripcion.tipo_de_evento || "",
                fecha_del_evento: inscripcion.fecha_del_evento ||"",
                horarios: inscripcion.horarios || "",
                nombre: inscripcion.nombre || "",
                apellido: inscripcion.apellido || "",
                edad: inscripcion.edad || "",
                altura: inscripcion.altura || "",
                peso: inscripcion.peso || "",
                escuela: inscripcion.escuela || "",
                profesor: Array.isArray(inscripcion.profesor) ? inscripcion.profesor : [],
                graduacion_actual: inscripcion.graduacion_actual || "",
                proxima_graduacion: inscripcion.proxima_graduacion || "",
                imagen: inscripcion.imagen || "",
                estado: inscripcion.estado || "",
                eliminado: inscripcion.eliminado || ""
            })
        }
      }, [inscripcion])

    if(isLoading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error: {error.message}</div>
    }
    if(!isLogged){
        return <p>Debes iniciar sesion como administrador</p>
    }
  
    const updateInscripcion = async (inscripcionData) =>{
        try{
            const response = await api.put(`/updateinscripcion/${id}`, inscripcionData,{
                headers:{
                    'Content-Type': 'application/json',
                },
                
            })
        if(response.status===200){
            alert(`Inscripcion actualizado`)
            navigate(`/inscripcion/${id}`)
        }else{ 
            alert ('algo salio mal :(')
        }
  
        }catch(error){
            console.error('error al realizar la solicitud')
            alert('error al actualizar la inscripcion')
        }   
    
    }
  
    const handleChange = (event) =>{
        const {name, value} = event.target
        setInscripcionData({...inscripcionData, [name]:value})
    }

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0]
        setFile(selectedFile)
    }

    const handleArrayChange = (event, fieldName) => {
        const { value } = event.target
        if(value.trim() === "") {
            setInscripcionData({ ...inscripcionData, [fieldName]: []})
        } else {
            const arrayValue = value.split(',').map(item => item.trim()).filter(item => item !=="")
            setInscripcionData({ ...inscripcionData, [fieldName]: arrayValue })
        }
    }
    const handleSubmit = async (event) =>{
        event.preventDefault()
        try {
            const urlImage = await uploadImage(file)
            const success = await updateInscripcion({...inscripcionData, imagen:urlImage})            
            if (success){
                navigate(`/inscripcion/${id}`)
            }       
        } catch (error) {
            console.error('Error al realizar la solicitud')
        }
    }
    const arrayToString = (array) => {
        return Array.isArray(array) ? array.join(', ') : ''
    }
  return (
    <div>
        <Nav/>
        <UserNav/>
        <div>
            <CardImagen imagen = {inscripcion.imagen}/>
            <form 
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl space-y-6 mt-8">
                <h1 className="text-2xl font-bold text-gray-800 text-center">Editar Inscripción</h1>
                
                <div className="flex flex-col mb-4">
                    <label
                        htmlFor="profileImage"
                        className="mb-2 text-sm font-semibold text-gray-800">
                        Foto del alumno
                    </label>

                    <div className="relative flex items-center justify-between w-full border border-gray-300 rounded-xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md focus-within:ring-2 focus-within:ring-blue-500">
                        <input
                        id="profileImage"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                        className="w-full cursor-pointer opacity-0 absolute inset-0 z-10"
                        />

                        <span className="px-4 py-2 text-gray-500 text-sm truncate">
                        Seleccioná una imagen...
                        </span>

                        <button
                        type="button"
                        className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-none hover:bg-blue-700 transition-colors duration-200">
                            Elegir archivo
                        </button>
                    </div>
                </div>

                
                {[
                    {label:"Tipo de evento", name:"tipo_de_evento", placeholder: inscripcion.tipo_de_evento},
                    {label:"Fecha del evento", name:"fecha_del_evento", placeholder: inscripcion.fecha_del_evento},
                    {label:"Horarios", name:"horario", placeholder: inscripcion.horarios},
                    {label:"Nombre", name:"nombre", placeholder: inscripcion.nombre},
                    {label:"Apellido", name:"apellido", placeholder: inscripcion.apellido},
                    {label:"Edad", name:"edad", placeholder: inscripcion.edad},
                    {label:"Altura", name:"altura", placeholder: inscripcion.altura},
                    {label:"Peso", name:"peso", placeholder: inscripcion.peso},
                    {label:"Escuela", name:"escuela", placeholder: inscripcion.escuela},
                    {label:"Graduacion Actual", name:"graduacion_actual", placeholder: inscripcion.graduacion_actual},
                    {label:"Proxima Graduacion", name:"proxima_graduacion", placeholder: inscripcion.proxima_graduacion},
                    {label:"Estado", name:"estado", placeholder: inscripcion.estado}
                ].map(({label, name, placeholder}) =>(
                    <div key={name}>
                        <label htmlFor={name} className='block text-sm font-medium text-gray-700 mb-1'>
                            {label}
                        </label>
                        <input
                            type='text'
                            id={name}
                            name={name}
                            value={inscripcionData[name]}
                            onChange={handleChange}
                            placeholder={placeholder}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                ))}
                <div>
                <label htmlFor="profesor" className="block text-sm font-medium text-gray-700 mb-1">
                    Profesores (separados por comas)
                </label>
                <input
                    type="text"
                    id="profesor"
                    name="profesor"
                    value={arrayToString(inscripcionData.profesor)}
                    onChange={(e) => handleArrayChange(e, 'profesor')}
                    placeholder={arrayToString(inscripcion.profesor)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-sm text-gray-500 mt-1">Ejemplo: Juan Pérez, María García, Carlos López</p>
                </div>

                <div className="flex justify-between items-center">
                    <button 
                    type="submit" 
                    className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                        Actualizar Inscripcion
                    </button>
                    <Link to='/pc_inscripciones'>
                        <button 
                        type="button"
                        className="bg-gray-300 text-gray-800 font-semibold px-6 py-2 rounded-lg hover:bg-gray-400 transition">
                            🡸 Volver
                        </button>
                    </Link>
                </div>
            </form>
            <Link to='/pc_inscripciones'>
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

export default InscripcionUpdate