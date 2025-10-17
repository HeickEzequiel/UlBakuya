import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import inscripcionStore from '../../store/inscripcionStore';
import { useFetchProfes } from '../../hooks/useProfesor';
import { useFetchEscuelas } from '../../hooks/useEscuela';

function NewInscripcion() {
  const location = useLocation()
  const evento = location.state || {}
  const hora = evento.horarios
  const Navigate = useNavigate();
  const { register } = inscripcionStore();
  const {data: profesores = [] } = useFetchProfes()
  const {data: escuelas = [] } = useFetchEscuelas()
  const [inscripcionData, setInscripcionData] = useState({
    tipo_de_evento:evento.tipo_de_evento,
    idEvento:evento.idEvento,
    fecha_del_evento: evento.fecha_del_evento,
    horarios: [],
    nombre: "",
    apellido: "",
    edad: "",
    altura: "",
    peso: "",
    escuela: "",
    profesor: [],
    graduacion_actual: "",
    proxima_graduacion: "",
    imagen: "",
    estado: "Activo",
    eliminado: false,
  });

    const grados = [
    "Blanco",
    "Blanco Punta Amarilla",
    "Amarillo",
    "Amarillo Punta Verde",
    "Verde",
    "Verde Punta Azul",
    "Azul",
    "Azul Punta Roja",
    "Rojo",
    "Rojo Punta Negra",
    "1er Dan",
    "2do Dan",
    "3er Dan",
    "4to Dan",
    "5to Dan",
    "6to Dan",
    "7mo Dan",
    "8vo Dan",
    "9no Dan"
  ]

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInscripcionData({ ...inscripcionData, [name]: value });
  };

    const handleGradoChange = (e) =>{
    setInscripcionData({
      ...inscripcionData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      register(inscripcionData);
      alert("Inscripcion creada con éxito");
      Navigate("/inscripciones");
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

            <label className="block mb-1 font-semibold text-gray-700">Graduacion</label> 
                <select
                  id="graduacion_actual"
                  name="graduacion_actual"
                  onChange={handleGradoChange}
                  className="p-2 border rounded-xl">
                    <option value="Blanco" disabled>Seleccione su graduacion</option>
                    {grados.map((grado,i)=>(
                      <option key={i} value={grado}>
                        {grado}
                    </option>
                  ))}
                </select>

            {evento.tipo_de_evento === "Examen" && (
              <div>
                <label className="block mb-1 font-semibold text-gray-700">Proxima Graduacion</label> 
                <select
                  id="proxima_graduacion"
                  name="proxima_graduacion"
                  onChange={handleGradoChange}
                  className="p-2 border rounded-xl">
                    <option value="Blanco" disabled>Seleccione la graduacion</option>
                    {grados.map((grado,i)=>(
                      <option key={i} value={grado}>
                        {grado}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Profesores (podés elegir más de uno)
            </label>
            <div className="grid grid-cols-2 gap-2">
              {profesores.map((prof) => (
                <label key={prof.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={prof.id}
                    checked={inscripcionData.profesor.includes(prof.id)}
                    onChange={(e) => {
                    
                      const value = e.target.value;
                      setInscripcionData((prev) => ({
                        ...prev,
                        profesor: e.target.checked
                        ? [...prev.profesor, value]
                        : prev.profesor.filter((id) => id !== value)
                      }));
                    }}
                  />
                  {prof.nombre} {prof.apellido}
                </label>
              ))}
            </div>
            </div>

            <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Horario:
            </label>
            <div className="grid-cols-1 gap-4">
              {hora.map((h) => (
                <label key={h} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={h}
                    checked={inscripcionData.horarios.includes(h)}
                    onChange={(e) => {
                    
                      const value = e.target.value;
                      setInscripcionData((prev) => ({
                        ...prev,
                        horarios: e.target.checked
                        ? [...prev.horarios, value]
                        : prev.horarios.filter((id) => id !== value)
                      }));
                    }}
                  />
                  {h}
                </label>
              ))}
            </div>
            </div>

            

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