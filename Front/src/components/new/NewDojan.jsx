import { Link, useNavigate } from "react-router-dom";
import dojanStore from "../../store/dojanStore";
import { useState } from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";

function NewDojan() {
  const Navigate = useNavigate();
  const { register } = dojanStore();
  const [dojanData, setDojanData] = useState({
    club: "",
    escuela: "",
    direccion: "",
    imagen: "",
    tel: "",
    profesor: "",
    horarios: "",
    estado: "Activo",
    eliminado: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDojanData({ ...dojanData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      
      const payload = {
      ...dojanData,
      profesor: dojanData.profesor
      .split(",")
      .map((d) => d.trim())
      .filter((d) => d.length > 0),
      horarios: dojanData.horarios
      .split(",")
      .map((h) => h.trim())
      .filter((h) => h.length > 0) 
      };

      register(payload);
      alert("Dojan creado con éxito");
      Navigate("/pc_dojanes");
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
            Crear Nuevo Dojan
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {[
              { name: "club", label: "Club", placeholder: "Ingrese club" },
              { name: "escuela", label: "Escuela", placeholder: "Ingrese escuela" },
              { name: "direccion", label: "Dirección", placeholder: "Ingrese direccion" },
              { name: "imagen", label: "Imagen", placeholder: "Ingrese link de la imagen" },
              { name: "tel", label: "Telefono", placeholder: "Ingrese numero de telefono" },
              { name: "profesor", label: "Profesor", placeholder: "Ingrese profesor" },
              { name: "horarios", label: "Horarios", placeholder: "Ingrese horarios" },
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
                  value={dojanData[field.name]}
                  placeholder={field.placeholder}
                  onChange={handleChange}
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition">
              Crear Dojan
            </button>

          </form>
          <div className="text-center">
            <Link to="/pc_dojanes">
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
export default NewDojan