import { Link, useNavigate, useParams } from "react-router-dom"
import userStore from "../../store/loginStore"
import { useFetchDojan } from "../../hooks/useDojan"
import { useState } from "react"
import Nav from "../nav/Nav"
import UserNav from "../usernav/UserNav"
import CardImagen from "../cards/CardImagen"
import Footer from "../footer/Footer"

function DojanesUpdate() {
  const isLogged = userStore((state)=>state.isLogged)
  const { id } = useParams()
  const navigate = useNavigate()
  const { data:dojan, isLoading, error } = useFetchDojan(id)
  const [dojanData, setDojanData] = useState({
    club:"",
    direccion:"",
    imagen:"",
    tel:"",
    profesor:"",
    horarios:"",
  })
  if(isLoading){
    return <div>Cargando...</div>
  }
  if(error){
    return <div>Error: {error.message}</div>
  }
  if(!isLogged){
    return <div>Debes iniciar sesion como administrador</div>
  }
  
  const updateDojan = async (dojanData) =>{
    try {
      const response = await api.put(`/updatedojan/${id}`, dojanData, {
        headers:{
          'content-type':'application/json',
        },
      })
      if(response.status===200){
        alert('dojan actualizado')
      }else{
        alert('algo salio mal :(')
      }
    } catch (error) {
      console.error('error al realizar la solicitud')
      alert('error al actualizar el dojan')
    }
  }

  const handleChange = (event) =>{
    const {name, value} = event.target
    setDojanData({...dojanData, [name]:value})
  }

  const handleSubmit = async (event) =>{
    event.preventDefault()
    try {
      updateDojan(dojanData)
      navigate(`/dojan/${id}`)
    } catch (error) {
      console.error('Error al realizar la solicitud')
    }
  }
  return (
    <div>
      <Nav/>
      <UserNav/>
      <div>
        <CardImagen imagen = {dojan.imagen}/>
        <form 
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl space-y-6 mt-8">
            <h1 className="text-2xl font-bold text-gray-800 text-center">Editar Dojan</h1>

            {[
              {label:"Club", name:"club", placeholder: dojan.club},
              {label:"Direccion", name:"direccion", placeholder: dojan.direccion},
              {label:"Link de la imagen", name:"imagen", placeholder:"Ingrese link de la imagen"},
              {label:"Telefono", name:"tel", placeholder: dojan.tel},
              {label:"Profesor", name:"profesor", placeholder: dojan.profesor},
              {label:"Horarios", name:"horarios", placeholder: dojan.horarios},
            ].map(({ label, name, placeholder}) => (
              <div key={name}>
              <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>
              <input
                type="text"
                id={name}
                name={name}
                value={dojanData[name]}
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
                  Actualizar Dojan
              </button>
              <Link to='/pc_dojanes'>
                <button
                  type="button"
                  className="bg-gray-300 text-gray-800 font-semibold px-6 py-2 rounded-lg hover:bg-gray-400 transition">
                    🡸 Volver
                </button>
              </Link>
            </div>
        </form>
        <Link to='/pc_dojanes'>
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

export default DojanesUpdate