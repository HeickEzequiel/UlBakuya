import { useNavigate } from "react-router-dom"
import inscripcionStore from "../../store/inscripcionStore"
import { useState } from "react"
import Nav from "../nav/Nav"
import Footer from "../footer/Footer"

function Inscripciones() {
  const Navigate = useNavigate()
  const { register } = inscripcionStore()
  const [inscripcionData, setInscripcionData] = useState({
    tipo_de_evento: "",
    horarios: "",
    nombre: "",
    apellido: "",
    edad: "",
    altura: "",
    peso: "",
    graduacion_actual: "",
    proxima_graduacion: "",
    imagen: ""
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setInscripcionData({ ...inscripcionData, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      register(inscripcionData)
      alert("Inscripción realizada con éxito")
      Navigate("/examenes")
    } catch (error) {
      console.error('Error al realizar la solicitud')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Nav />
      <div className="flex-grow flex justify-center items-center py-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl space-y-6"
        >
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Formulario de Inscripción</h2>

          <select
            name="tipo_de_evento"
            value={inscripcionData.tipo_de_evento}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Seleccione un evento</option>
            <option value="Examen">Examen</option>
            <option value="Torneo">Torneo</option>
            <option value="Clase Especial">Clase Especial</option>
            <option value="Curso Tecnico">Curso Técnico</option>
          </select>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: 'horarios', placeholder: 'Ingrese horario' },
              { name: 'nombre', placeholder: 'Ingrese nombre' },
              { name: 'apellido', placeholder: 'Ingrese apellido' },
              { name: 'edad', placeholder: 'Ingrese edad' },
              { name: 'altura', placeholder: 'Ingrese altura' },
              { name: 'peso', placeholder: 'Ingrese peso' },
              { name: 'graduacion_actual', placeholder: 'Graduación actual' },
              { name: 'proxima_graduacion', placeholder: 'Próxima graduación' },
              { name: 'imagen', placeholder: 'Link de imagen' }
            ].map(({ name, placeholder }) => (
              <input
                key={name}
                type="text"
                name={name}
                value={inscripcionData[name]}
                placeholder={placeholder}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Finalizar Inscripción
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Inscripciones
