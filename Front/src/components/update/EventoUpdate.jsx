import { Link, useNavigate, useParams } from "react-router-dom"
import userStore from "../../store/loginStore"
import { useFetchEvento } from "../../hooks/useEventos"
import Nav from "../nav/Nav"
import UserNav from "../usernav/UserNav"
import CardImagen from "../cards/CardImagen"
import Footer from "../footer/Footer"
import { useState } from "react"


function EventoUpdate() {
    const isLogged = userStore((state)=>state.isLogged)
    const { id } = useParams()
    const navigate = useNavigate()
    const { data:evento, isLoading, error } = useFetchEvento(id)
    const [eventoData, setEventoData] = useState({
      tipo_de_evento:"",
      fecha_del_evento:"",
      horarios:"",
      club:"",
      direccion:"",
      imagen:""
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
  
    const updateEvento = async (eventoData) =>{
        try{
            const response = await api.put(`/updateevento/${id}`, eventoData,{
                headers:{
                    'Content-Type': 'application/json',
                },
                
            })
        if(response.status===200){
            alert(`Evento actualizado`)
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
        setEventoData({...eventoData, [name]:value})
    }
  
    const handleSubmit = async (event) =>{
        event.preventDefault()
        try {
            updateEvento(eventoData)            
            navigate(`/evento/${id}`)       
        } catch (error) {
            console.error('Error al realizar la solicitud')
        }
    }
  return (
    <div>
        <Nav/>
        <UserNav/>
        <div>
            <CardImagen imagen = {evento.imagen}/>
            <form 
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl space-y-6 mt-8"
            >
                <h1 className="text-2xl font-bold text-gray-800 text-center">Editar Evento</h1>
                {[
                    {label:"Tipo de evento", name:"tipo_de_evento", placeholder: evento.tipo_de_evento},
                    {label:"Fecha del evento", name:"fecha_del_evento", placeholder: evento.fecha_del_evento},
                    {label:"Horarios", name:"horarios", placeholder: evento.horarios},
                    {label:"Club", name:"club", placeholder: evento.club},
                    {label:"Direcion", name:"direccion", placeholder: evento.direccion},
                    {label:"Imagen", name:"imagen", placeholder: evento.imagen}
                ].map(({label, name, placeholder}) =>(
                    <div key={name}>
                        <label htmlFor={name} className='block text-sm font-medium text-gray-700 mb-1'>
                            {label}
                        </label>
                        <input
                            type='text'
                            id={name}
                            name={name}
                            value={eventoData[name]}
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
                        Actualizar Evento
                    </button>
                    <Link to='/pc_eventos'>
                        <button 
                        type="button"
                        className="bg-gray-300 text-gray-800 font-semibold px-6 py-2 rounded-lg hover:bg-gray-400 transition">
                            🡸 Volver
                        </button>
                    </Link>
                </div>
            </form>
            <Link to='/pc_eventos'>
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

export default EventoUpdate