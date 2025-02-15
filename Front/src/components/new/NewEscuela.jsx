import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import escuelasStore from "../../store/escuelaStore"
import Nav from "../nav/Nav"
import Footer from "../footer/Footer"

function NewEscuela(props) {
    const Navigate = useNavigate()
    const { register } = escuelasStore()
    const [escuelaData, setEscuelaData] = useState ({
        nombre:"",
        imagen:"",
        director:"",
        dojan:"",
        eliminado:false
    })

    
    const handleChange = (event) =>{
        const {name, value} = event.target
        setEscuelaData({...escuelaData, [name]:value})
       
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            register(escuelaData)
            alert("Escuela creada con exito")
            Navigate("/pc_escuelas")
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
                        value={escuelaData.nombre}
                        placeholder="Ingrese nombre"
                        onChange={handleChange}
                    />
                    <br />
                    <input 
                        className="lg:border-2 lg:border-black lg:rounded-xl"
                        type='text'
                        key='imagen'
                        name='imagen'
                        value={escuelaData.imagen}
                        placeholder="Ingrese link de la imagen"
                        onChange={handleChange}
                    />
                    <br />
                    <input 
                        className="lg:border-2 lg:border-black lg:rounded-xl"
                        type='text'
                        key='director'
                        name='director'
                        value={escuelaData.director}
                        placeholder="Ingrese el director"
                        onChange={handleChange}
                    />
                    <br />
                   
                    <input 
                        className="lg:border-2 lg:border-black lg:rounded-xl"
                        type='text'
                        key='dojan'
                        name='dojan'
                        value={escuelaData.dojan}
                        placeholder="Ingrese dojan"
                        onChange={handleChange}
                    />
                    <br />
                    
                    <button className="boton">Crear Escuela</button>

                </form>
                <Link to='/pc_escuelas'><button className="boton">🡸 Volver</button></Link>
            </div>
        <Footer/>
    </div>
  )
}

export default NewEscuela