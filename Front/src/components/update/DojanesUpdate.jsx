import { Link, useNavigate, useParams } from "react-router-dom"
import userStore from "../../store/loginStore"
import { useFetchDojan } from "../../hooks/useDojan"
import { useState, useEffect } from "react"
import Nav from "../nav/Nav"
import UserNav from "../usernav/UserNav"
import CardImagen from "../cards/CardImagen"
import Footer from "../footer/Footer"
import api from "../../api/ubk"

function DojanesUpdate() {
  const isLogged = userStore((state) => state.isLogged)
  const { id } = useParams()
  const navigate = useNavigate()
  const { data: dojan, isLoading, error } = useFetchDojan(id)
  console.log(dojan)
  const [dojanData, setDojanData] = useState({
    club: "",
    direccion: "",
    imagen: "",
    tel: "",
    profesor: [],
    horarios: [],
  })

  useEffect(() => {
    if (dojan) {
      setDojanData({
        club: dojan.club || "",
        direccion: dojan.direccion || "",
        imagen: dojan.imagen || "",
        tel: dojan.tel || "",
        profesor: Array.isArray(dojan.profesor) ? dojan.profesor : [],
        horarios: Array.isArray(dojan.horarios) ? dojan.horarios : [],
      })
    }
  }, [dojan])

  if (isLoading) {
    return <div>Cargando...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }
  if (!isLogged) {
    return <div>Debes iniciar sesion como administrador</div>
  }

  const updateDojan = async (dojanData) => {
    try {
      const response = await api.put(`/updatedojan/${id}`, dojanData, {
        headers: {
          'content-type': 'application/json',
        },
      })
      if (response.status === 200) {
        alert('Dojan actualizado correctamente')
        navigate(`/dojan/${id}`)
      } else {
        alert('Algo salió mal :(')
      }
    } catch (error) {
      console.error('Error al realizar la solicitud', error.message)
      alert('Error al actualizar el dojan')
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setDojanData({ ...dojanData, [name]: value })
  }
  const handleArrayChange = (event, fieldName) => {
    const { value } = event.target
    if (value.trim() === "") {
      setDojanData({ ...dojanData, [fieldName]: [] })
    } else {
      const arrayValue = value.split(',').map(item => item.trim()).filter(item => item !== "")
      setDojanData({ ...dojanData, [fieldName]: arrayValue })
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const success = await updateDojan(dojanData)
      if (success) {
        navigate(`/dojan/${id}`)
      }
    } catch (error) {
      console.error('Error al realizar la solicitud', error)
    }
  }
  const arrayToString = (array) => {
    return Array.isArray(array) ? array.join(', ') : ''
  }

  return (
    <div>
      <Nav />
      <UserNav />
      <div>
        <CardImagen imagen={dojan.imagen} />
        <form 
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl space-y-6 mt-8"
        >
          <h1 className="text-2xl font-bold text-gray-800 text-center">Editar Dojang</h1>
          {[
            { label: "Club", name: "club", placeholder: dojan.club },
            { label: "Direccion", name: "direccion", placeholder: dojan.direccion },
            { label: "Link de la imagen", name: "imagen", placeholder: "Ingrese link de la imagen" },
            { label: "Telefono", name: "tel", placeholder: dojan.tel },
          ].map(({ label, name, placeholder }) => (
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

          <div>
            <label htmlFor="profesor" className="block text-sm font-medium text-gray-700 mb-1">
              Profesores (separados por comas)
            </label>
            <input
              type="text"
              id="profesor"
              name="profesor"
              value={arrayToString(dojanData.profesor)}
              onChange={(e) => handleArrayChange(e, 'profesor')}
              placeholder={arrayToString(dojan.profesor)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-gray-500 mt-1">Ejemplo: Juan Pérez, María García, Carlos López</p>
          </div>

          <div>
            <label htmlFor="horarios" className="block text-sm font-medium text-gray-700 mb-1">
              Horarios (separados por comas)
            </label>
            <input
              type="text"
              id="horarios"
              name="horarios"
              value={arrayToString(dojanData.horarios)}
              onChange={(e) => handleArrayChange(e, 'horarios')}
              placeholder={arrayToString(dojan.horarios)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-gray-500 mt-1">Ejemplo: Lunes 10:00, Miércoles 18:00, Viernes 16:00</p>
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Actualizar Dojan
            </button>
            <Link to='/pc_dojanes'>
              <button
                type="button"
                className="bg-gray-300 text-gray-800 font-semibold px-6 py-2 rounded-lg hover:bg-gray-400 transition"
              >
                🡸 Volver
              </button>
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default DojanesUpdate