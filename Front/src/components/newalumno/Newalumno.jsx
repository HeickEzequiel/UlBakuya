import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import alumnosStore from "../../store/alumnosStore"
import Nav from "../nav/Nav"
import Footer from "../footer/Footer"

function Newalumno(props) {
    const Navigate = useNavigate()
    const { register } = alumnosStore()
    const [alumnoData, setAlumnoData] = useState ({
        nombre:"",
        apellido:"",
        imagen:"",
        fecha_de_nacimiento:"",
        escuela:"",
        graduacion:"",
        fecha_de_examen:"",
        profesor:"",
        estado:"",
        eliminado:false

    })

    
    const handleChange = (event) =>{
        const {name, value} = event.target
        setAlumnoData({...alumnoData, [name]:value})
       
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            register(alumnoData)
            alert("Alumno creado con exito")
            Navigate("/paneldecontrol")
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
                        value={alumnoData.nombre}
                        placeholder="Ingrese nombre"
                        onChange={handleChange}
                    />
                    <br />
                    <input 
                        className="lg:border-2 lg:border-black lg:rounded-xl"
                        type='text'
                        key='apellido'
                        name='apellido'
                        value={alumnoData.apellido}
                        placeholder="Ingrese apellido"
                        onChange={handleChange}
                    />
                    <br />
                    <input 
                        className="lg:border-2 lg:border-black lg:rounded-xl"
                        type='text'
                        key='imagen'
                        name='imagen'
                        value={alumnoData.imagen}
                        placeholder="Ingrese link de la imagen"
                        onChange={handleChange}
                    />
                    <br />
                   <p>fecha de nacimiento</p> <input 
                        className="lg:border-2 lg:border-black lg:rounded-xl"
                        type='date'
                        key='fecha_de_nacimiento'
                        name='fecha_de_nacimiento'
                        value={alumnoData.fecha_de_nacimiento}
                        placeholder="Ingresar fecha de nacimiento"
                        onChange={handleChange}
                    />
                    <br />
                    <input 
                        className="lg:border-2 lg:border-black lg:rounded-xl"
                        type='text'
                        key='escuela'
                        name='escuela'
                        value={alumnoData.escuela}
                        placeholder="Ingrese escuela"
                        onChange={handleChange}
                    />
                    <br />
                    <input 
                        className="lg:border-2 lg:border-black lg:rounded-xl"
                        type='text'
                        key='graduacion'
                        name='graduacion'
                        value={alumnoData.graduacion}
                        placeholder="Ingrese graduación"
                        onChange={handleChange}
                    />
                    <br />
                    <input 
                        className="lg:border-2 lg:border-black lg:rounded-xl"
                        type='date'
                        key='fecha_de_examen'
                        name='fecha_de_examen'
                        value={alumnoData.fecha_de_examen}
                        placeholder="Ingrese fecha de examen"
                        onChange={handleChange}
                    />
                    <br />
                    <input 
                        className="lg:border-2 lg:border-black lg:rounded-xl"
                        type='text'
                        key='profesor'
                        name='profesor'
                        value={alumnoData.profesor}
                        placeholder="Ingrese profesor"
                        onChange={handleChange}
                    />
                    <br />
                    <input 
                        className="lg:border-2 lg:border-black lg:rounded-xl"
                        type='text'
                        key='estado'
                        name='estado'
                        value={alumnoData.estado}
                        placeholder="Ingrese estado"
                        onChange={handleChange}
                    />
                    <br />
                    <button className="boton">Crear Alumno</button>

                </form>
                <Link to='/paneldecontrol'><button className="boton">🡸 Volver</button></Link>
            </div>
        <Footer/>
    </div>
  )
}

export default Newalumno