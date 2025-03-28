import { useNavigate } from "react-router-dom"
import inscripcionStore from "../../store/inscripcionStore"
import { useState } from "react"
import Nav from "../nav/Nav"
import Footer from "../footer/Footer"

function Inscripciones() {
    const Navigate = useNavigate()
    const { register } = inscripcionStore()
    const [ inscripcionData, setInscripcionData] = useState({
      tipo_de_evento:"",
      horarios:"",
      nombre:"",
      apellido:"",
      edad:"",
      altura:"",
      peso:"",
      graduacion_actual:"",
      proxima_graduacion:"",
      imagen:""
    })

    const handleChange = (event)=>{
      const {name, value} = event.target
      setInscripcionData({...inscripcionData, [name]:value})
    }
    const handleSubmit = async (event)=> {
      event.preventDefault()
      try {
        register(inscripcionData)
        alert("Inscripcion realizada con exito")
        Navigate("/examenes")
      } catch (error) {
          console.error('Error al realizar la solicitud')
      }
    }
  return (
    <div>
      <Nav/>
        <div>
          <form onSubmit={handleSubmit}>
            <select name="tipo_de_evento" value={inscripcionData.tipo_de_evento} onChange={handleChange}>
              <option value="">Seleccione un evento</option>
              <option value="Examen">Examen</option>
              <option value="Torneo">Torneo</option>
              <option value="Clase Especial">Clase Especial</option>
              <option value="Curso Tecnico">Curso Tecnico</option>
            </select>
            <br />
            
            <input 
              className="lg:border-2 lg:border-black lg:rounded-xl"
              type='text'
              key='horarios'
              name='horarios'
              value={inscripcionData.horarios}
              placeholder="Ingrese horario"
              onChange={handleChange}
            />
            <br />

            <input 
              className="lg:border-2 lg:border-black lg:rounded-xl"
              type='text'
              key='nombre'
              name='nombre'
              value={inscripcionData.nombre}
              placeholder="Ingrese nombre"
              onChange={handleChange}
            />
            <br />
            
            <input 
              className="lg:border-2 lg:border-black lg:rounded-xl"
              type='text'
              key='apellido'
              name='apellido'
              value={inscripcionData.apellido}
              placeholder="Ingrese apellido"
              onChange={handleChange}
            />
            <br />

            <input 
              className="lg:border-2 lg:border-black lg:rounded-xl"
              type='text'
              key='edad'
              name='edad'
              value={inscripcionData.edad}
              placeholder="Ingrese edad"
              onChange={handleChange}
            />
            <br />
            
            <input 
              className="lg:border-2 lg:border-black lg:rounded-xl"
              type='text'
              key='altura'
              name='altura'
              value={inscripcionData.altura}
              placeholder="Ingrese altura"
              onChange={handleChange}
            />
            <br />
            
            <input 
              className="lg:border-2 lg:border-black lg:rounded-xl"
              type='text'
              key='peso'
              name='peso'
              value={inscripcionData.peso}
              placeholder="Ingrese peso"
              onChange={handleChange}
            />
            <br />

            <input 
              className="lg:border-2 lg:border-black lg:rounded-xl"
              type='text'
              key='graduacion_actual'
              name='graduacion_actual'
              value={inscripcionData.graduacion_actual}
              placeholder="Ingrese graduacion_actual"
              onChange={handleChange}
            />
            <br />

            <input 
              className="lg:border-2 lg:border-black lg:rounded-xl"
              type='text'
              key='proxima_graduacion'
              name='proxima_graduacion'
              value={inscripcionData.proxima_graduacion}
              placeholder="Ingrese proxima_graduacion"
              onChange={handleChange}
            
            />
            <input 
              className="lg:border-2 lg:border-black lg:rounded-xl"
              type='text'
              key='imagen'
              name='imagen'
              value={inscripcionData.imagen}
              placeholder="Ingrese link de la imagen"
              onChange={handleChange}
            />
            <br />
            <button className="boton">Finalizar Inscripcion</button>
          </form>
        </div> 
      <Footer/> 
    </div>
  )
}

export default Inscripciones