import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import inscripcionStore from '../../store/inscripcionStore';

function NewInscripcion() {
  const location = useLocation()
  const evento = location.state || {}
  console.log(evento.club)
  const Navigate = useNavigate();
  const { register } = inscripcionStore();
  const [inscripcionData, setInscripcionData] = useState({
    tipo_de_evento:evento.tipo_de_evento,
    fecha_del_evento: evento.fecha_del_evento,
    horarios: evento.horarios,
    nombre: "",
    apellido: "",
    edad: "",
    altura: "",
    peso: "",
    escuela: "",
    profesor: "",
    graduacion_actual: "",
    proxima_graduacion: "",
    fecha_de_examen: "",
    imagen: "",
    estado: "Activo",
    eliminado: false,
  });
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInscripcionData({ ...inscripcionData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      register(inscripcionData);
      alert("Inscripcion creada con éxito");
      Navigate("/pc_inscripciones");
    } catch (error) {
      console.error("Error al realizar la solicitud", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow flex justify-center items-center bg-gray-100 px-4 py-10">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Crear Nueva Inscripcion
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
         
            {[
              { name: "imagen", label:"Foto", placeholder: "Ingrese link de la imagen" },
              { name: "nombre", label:"Nombre", placeholder: "Ingrese nombre" },
              { name: "apellido", label:"Apellido", placeholder: "Ingrese apellido" },
              { name: "edad", label:"Edad", placeholder: "Ingrese edad" },
              { name: "altura", label:"Altura", placeholder: "Ingrese altura" },
              { name: "peso", label:"Peso", placeholder: "Ingrese peso" },
              { name: "escuela", label:"Escuela", placeholder: "Ingrese escuela" },
              { name: "profesor", label:"Profesor", placeholder: "Ingrese profesor" },
              { name: "graduacion_actual", label:"Graduacion Actual", placeholder: "Ingrese graduación actual" },

            ].map((field) => (
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
                  value={inscripcionData[field.name]}
                  placeholder={field.placeholder}
                  onChange={handleChange}
                  />
                  
              </div>
            ))}
            {evento.tipo_de_evento === "Examen" && (
              <div>
                <label>Proxima graduacion </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type='text'
                  name='proxima_graduacion'
                  value={inscripcionData["proxima_graduacion"]}
                  placeholder='Ingrese proxima graduacion'
                  onChange={handleChange}
                />
              </div>
            )}
            {console.log(inscripcionData)}

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition">
              Crear Inscripcion
            </button>

          </form>
          <div className="text-center">
            <Link to="/pc_inscripciones">
              <button className="mt-4 text-blue-600 hover:underline">
                🡸 Volver
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NewInscripcion