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
        estado:"Activo",
        eliminado: false
    })

    
    const handleChange = (event) =>{
        const {name, value} = event.target
        setEscuelaData({...escuelaData, [name]:value})
       
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            
            // convierte los strings ingresados con , en un array para que la BD lo pueda guardar
            const payload = {
                ...escuelaData,
                dojan: escuelaData.dojan
                  .split(",")
                  .map((d) => d.trim())
                  .filter((d) => d.length > 0), 
            };

            register(payload)
            alert("Escuela creada con exito")
            Navigate("/pc_escuelas")
        } catch (error) {
            console.error('Error al realizar la solicitud', error)
        }
    }
    return (
    <div className="min-h-screen flex flex-col">
        <Nav/>
        <main className="flew-grow flex justify-center items-center bg-gray-100 px-4 py-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl space-y-6">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
                    Crear Nueva Escuela
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                        {name:"nombre", label: "Nombre", placeholder:"Ingrese nombre"},
                        {name:"director", label: "Director", placeholder:"Ingrese Director"},
                        {name:"dojan", label: "Dojang", placeholder:"Ingrese dojang"},
                        {name:"imagen", label: "Escudo", placeholder:"Ingrese link de la imagen"},
                        {name:"estado", label: "Estado", placeholder:"Ingrese estado"}
                    ].map((field) =>(
                        <div key={field.name}>
                            {field.label && (
                                <label className="block mb-1 font-semibold text-gray-700">
                                    {field.label}
                                </label>
                            )}

                            <input
                                className="w-full px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                type={field.type || "text"}
                                name={field.name}
                                value={escuelaData[field.name]}
                                placeholder={field.placeholder}
                                onChange={handleChange}
                            />
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition">
                            Crear Escuela
                    </button>
                </form>

                <div className="text-center">
                    <Link to="/pc_escuelas">
                        <button className="mt-4 text-blue-600 hover:underline">
                        🡸 Volver 
                        </button>
                    </Link>
                </div>
            </div>

        </main>
            
        <Footer/>
    </div>
  )
}

export default NewEscuela