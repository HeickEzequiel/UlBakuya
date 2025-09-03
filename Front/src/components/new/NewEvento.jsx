import { Link, useNavigate } from "react-router-dom";
import eventoStore from "../../store/eventoStore";
import { useState } from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";

function NewEvento() {
    const Navigate = useNavigate();
    const { register } = eventoStore();
    const [ eventoData, setEventoData ] = useState({
      tipo_de_evento: "",
      fecha_del_evento:"",
      horarios: "",
      club: "",
      direccion: "",
      imagen: "",
      estado: "Activo",
      eliminado: false,
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setEventoData({ ...eventoData, [name]: value });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {

        register(eventoData);
        alert("Evento creado con éxito");
        Navigate("/pc_eventos");
      } catch (error) {
        console.error("Error al realizar la solicitud", error);
      }
    };
  
    return (
      <div className="min-h-screen flex flex-col">
        <Nav/>
        <main className="flex-grow flex justify-center items-center bg-gray-100 px-4 py-10">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl space-y-6">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              Crear Nuevo Evento
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {[
                { name: "tipo_de_evento", label: "Evento", placeholder: "Ingrese evento" },
                {
                    name: "fecha_del_evento",
                    type: "date",
                    label: "Fecha del evento",
                },
                { name: "horarios", label: "Horario", placeholder: "Ingrese horario" },
                { name: "club", label: "Club", placeholder: "Ingrese club" },
                { name: "direccion", label: "Dirección", placeholder: "Ingrese direccion" },
                { name: "imagen", label: "Imagen", placeholder: "Ingrese link de la imagen" },
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
                    value={eventoData[field.name]}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}
  
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition">
                Crear Evento
              </button>
  
            </form>
            <div className="text-center">
              <Link to="/pc_eventos">
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

export default NewEvento