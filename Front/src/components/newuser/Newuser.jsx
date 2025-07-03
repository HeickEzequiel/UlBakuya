import { useNavigate } from "react-router-dom";
import { useState } from "react";
import userValidation from "../../../utils/userValidation";
import Nav from "../nav/Nav";
import userStore from "../../store/loginStore";
import Footer from "../footer/Footer";

function Newuser(props) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    fecha_de_nacimiento: "",
    tel: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    nombre: "Ingrese su nombre",
    apellido: "Ingrese su apellido",
    fecha_de_nacimiento: "Ingrese su fecha de nacimiento",
    tel: "Ingrese número de teléfono",
    email: "Ingrese su email",
    password: "Ingrese su contraseña",
  });

  const { register } = userStore();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    setErrors(userValidation({ ...userData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      register(userData);
      navigate("/login");
    } catch (error) {
      console.log("Error al realizar la solicitud:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow flex justify-center items-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Crear nuevo usuario</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { name: "nombre", type: "text", placeholder: "Nombre" },
              { name: "apellido", type: "text", placeholder: "Apellido" },
              { name: "fecha_de_nacimiento", type: "date", placeholder: "Fecha de nacimiento" },
              { name: "tel", type: "text", placeholder: "Teléfono" },
              { name: "email", type: "email", placeholder: "Email" },
              { name: "password", type: "password", placeholder: "Contraseña" },
            ].map(({ name, type, placeholder }) => (
              <div key={name}>
                <input
                  className="w-full px-4 py-2 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type={type}
                  name={name}
                  value={userData[name]}
                  placeholder={placeholder}
                  onChange={handleChange}
                />
                {errors[name] && (
                  <p className="text-sm text-red-500 mt-1">{errors[name]}</p>
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
              disabled={
                Object.values(errors).some((err) => err !== "")
              }
            >
              Crear usuario
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Newuser;
