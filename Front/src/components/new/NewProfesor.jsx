import { Link, useNavigate } from "react-router-dom"
import profesorStore from "../../store/profesorStore"
import { useState } from "react"
import Nav from "../nav/Nav"
import Footer from "../footer/Footer"

function NewProfesor(props) {
    const navigate = useNavigate()
    const { register } = profesorStore()
    const [profesorData, setProfesorData] = useState({
        nombre:"",
        apellido:"",
        imagen:"",
        fecha_de_nacimiento:"",
        escuela:"",
        graduacion:"",
        fecha_de_examen:"",
        instructor_mayor:"",
        estado:"",
        eliminado: false

    })

    const handleChange = (event) =>{
        const {name, value} = event.target
        setProfesorData({...profesorData, [name]:value})
    }
    const handleSubmit = async (event) =>{
        event.preventDefault()
        try {
            register(profesorData)
            alert("Profesor creado con exito")
            navigate("/pc_profesores")
        } catch (error) {
            console.error('Error al realizar la solicitud', error)
        }
    }
  return (
    <div>
        <Nav/>
            <div>
                <form onSubmit={handleSubmit}>
                    
                    <input 
                        className="lg:border-2 lg:border-black lg:rounded-xl"
                        type='text'
                        key='nombre'
                        name='nombre'
                        value={profesorData.nombre}
                        placeholder="Ingrese nombre"
                        onChange={handleChange}
                    />
                    <br />
                    <input 
                        className="lg:border-2 lg:border-black lg:rounded-xl"
                        type='text'
                        key='apellido'
                        name='apellido'
                        value={profesorData.apellido}
                        placeholder="Ingrese apellido"
                        onChange={handleChange}
                    />
                    <br />
                    <input 
                        className="lg:border-2 lg:border-black lg:rounded-xl"
                        type='text'
                        key='imagen'
                        name='imagen'
                        value={profesorData.imagen}
                        placeholder="Ingrese link de la imagen"
                        onChange={handleChange}
                    />
                    <br />
                   <p>fecha de nacimiento</p> <input 
                        className="lg:border-2 lg:border-black lg:rounded-xl"
                        type='date'
                        key='fecha_de_nacimiento'
                        name='fecha_de_nacimiento'
                        value={profesorData.fecha_de_nacimiento}
                        placeholder="Ingresar fecha de nacimiento"
                        onChange={handleChange}
                    />
                    <br />
                    <input 
                        className="lg:border-2 lg:border-black lg:rounded-xl"
                        type='text'
                        key='escuela'
                        name='escuela'
                        value={profesorData.escuela}
                        placeholder="Ingrese escuela"
                        onChange={handleChange}
                    />
                    <br />
                    <input 
                        className="lg:border-2 lg:border-black lg:rounded-xl"
                        type='text'
                        key='graduacion'
                        name='graduacion'
                        value={profesorData.graduacion}
                        placeholder="Ingrese graduación"
                        onChange={handleChange}
                    />
                    <br />
                    <input 
                        className="lg:border-2 lg:border-black lg:rounded-xl"
                        type='date'
                        key='fecha_de_examen'
                        name='fecha_de_examen'
                        value={profesorData.fecha_de_examen}
                        placeholder="Ingrese fecha de examen"
                        onChange={handleChange}
                    />
                    <br />
                    <input 
                        className="lg:border-2 lg:border-black lg:rounded-xl"
                        type='text'
                        key='instructor_mayor'
                        name='instructor_mayor'
                        value={profesorData.instructor_mayor}
                        placeholder="Ingrese instructor mayor"
                        onChange={handleChange}
                    />
                    <br />
                    <input 
                        className="lg:border-2 lg:border-black lg:rounded-xl"
                        type='text'
                        key='estado'
                        name='estado'
                        value={profesorData.estado}
                        placeholder="Ingrese estado"
                        onChange={handleChange}
                    />
                    <br />
                    <button className="boton">Crear Profesor</button>

                </form>
                <Link to='/pc_profesores'><button className="boton">🡸 Volver</button></Link>
            </div>
        <Footer/>
    </div>
  )
}

export default NewProfesor