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
        estado:"Activo",
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
    <div className="min-h-screen flex flex-col">
        <Nav/>
        <main className="flex-grow flex justify-center items-center bg-gray-100 px-4 py-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl space-y-6">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
                    Crear Nuevo Profesor
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                        {name: "nombre", placeholder: "Ingrese nombre"},
                        {name: "apellido", placeholder: "Ingrese apellido"},
                        {name: "imagen", placeholder: "Ingrese link de la imagen"},
                        {name: "fecha_de_nacimiento", type:"date", label:"Fecha de nacimiento"},
                        {name: "escuela", placeholder:"Ingrese escuela"},
                        {name: "graduacion", placeholder:"Ingrese graduacion"},
                        {name: "fecha_de_examen", type:"date", label:"Fecha de examen"},
                        {name: "instructor_mayor", placeholder:"Ingrese instructor mayor"},
                        {name: "estado", placeholder:"Ingrese estado"},
                    ].map((field) =>(
                        <div key={field.name}>
                            {field.label && (
                                <label className="block mb-1 font-semibold text-gray-700">
                                    {field.label}
                                </label>
                            )}

                            <input
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                type={field.type || "text"}
                                name={field.name}
                                value={profesorData[field.name]}
                                placeholder={field.placeholder}
                                onChange={handleChange}
                            />
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition">
                            Crear Profesor
                    </button>
                </form>

                <div className="text-center">
                    <Link to="/pc_profesores">
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

export default NewProfesor