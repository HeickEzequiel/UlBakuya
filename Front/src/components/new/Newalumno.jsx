import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import alumnosStore from "../../store/alumnosStore";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import { useFetchEscuelas } from "../../hooks/useEscuela";
import { useFetchProfes } from "../../hooks/useProfesor";

function Newalumno() {
  const Navigate = useNavigate();
  const { register } = alumnosStore();
  const {data: escuelas =[] } = useFetchEscuelas()
  const {data: profesores =[] } = useFetchProfes()
  const [alumnoData, setAlumnoData] = useState({
    nombre: "",
    apellido: "",
    imagen: "",
    fecha_de_nacimiento: "",
    escuela: "",
    graduacion: "",
    fecha_de_examen: "",
    profesor: [],
    estado: "Activo",
    eliminado: false,
  });
console.log(profesores, escuelas)
const handleChange = (e) => {
  setAlumnoData({
    ...alumnoData,
    [e.target.name]: e.target.value
  });
};

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      register(alumnoData);
      alert("Alumno creado con éxito");
      Navigate("/pc_alumnos");
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
            Crear Nuevo Alumno
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {[
              { name: "nombre", label: "Nombre", placeholder: "Ingrese nombre" },
              { name: "apellido", placeholder: "Ingrese apellido" },
              { name: "imagen", placeholder: "Ingrese link de la imagen" },
              {
                name: "fecha_de_nacimiento",
                type: "date",
                label: "Fecha de nacimiento",
              },
              { name: "graduacion", label: "Graduación", placeholder: "Ingrese graduación" },
              {
                name: "fecha_de_examen",
                type: "date",
                label: "Fecha de examen",
              },
              { name: "estado", label: "Estado", placeholder: "Ingrese estado" },
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
                  value={alumnoData[field.name]}
                  placeholder={field.placeholder}
                  onChange={handleChange}
                />
              </div>
            ))}

              <div>
                <label className="block mb-1 font-semibold text-gray-700">Escuela</label>
                <select
                  name="escuela"
                  value={alumnoData.escuela}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                <option value="">Seleccione una escuela</option>
                {escuelas.map((escuela) => (
                  <option key={escuela.id} value={escuela.id}>
                    {escuela.nombre}
                  </option>
                ))}
                </select>
              </div>

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
                    checked={alumnoData.profesor.includes(prof.id)}
                    onChange={(e) => {
                    
                      const value = e.target.value;
                        setAlumnoData((prev) => ({
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

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition">
              Crear Alumno
            </button>

          </form>
          <div className="text-center">
            <Link to="/pc_alumnos">
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

export default Newalumno;
