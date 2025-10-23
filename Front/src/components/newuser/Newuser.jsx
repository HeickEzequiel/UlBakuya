import { useNavigate } from "react-router-dom";
import { useState } from "react";
import userValidation from "../../../utils/userValidation";
import Nav from "../nav/Nav";
import userStore from "../../store/loginStore";
import Footer from "../footer/Footer";
import { uploadImage } from "../../services/cloudinaryService";
import { registerUser } from "../../services/usuariosService";

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

  const [file, setFile] = useState(null)
  const { register } = userStore();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    setErrors(userValidation({ ...userData, [name]: value }));
  };

  const handleFileChange = (e) =>{
    const selectedFile = e.target.files[0]
    setFile(selectedFile)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const urlImagen = await uploadImage(file)
      const nuevoUsuario = await registerUser({ ...userData, image:urlImagen})
      
      alert ("Usuario creado con éxito")
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
            
            <div className="flex flex-col mb-4">
              <label
                htmlFor="profileImage"
                className="mb-2 text-sm font-semibold text-gray-800">
                Foto de perfil
              </label>

              <div className="relative flex items-center justify-between w-full border border-gray-300 rounded-xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md focus-within:ring-2 focus-within:ring-blue-500">
                <input
                  id="profileImage"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                  className="w-full cursor-pointer opacity-0 absolute inset-0 z-10"
                />

                <span className="px-4 py-2 text-gray-500 text-sm truncate">
                  Seleccioná una imagen...
                </span>

                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-none hover:bg-blue-700 transition-colors duration-200">
                    Elegir archivo
                </button>
              </div>
            </div>
            
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
