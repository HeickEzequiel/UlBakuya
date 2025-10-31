import { Link, useNavigate } from "react-router-dom";
import userStore from "../../store/loginStore";
import { useState } from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import usuarioStore from "../../store/usuarioStore";
import { uploadImage } from "../../services/cloudinaryService";
import { registerUser } from "../../services/usuariosService";

function NewUsuario() {
  const Navigate = useNavigate();
  const { register } = usuarioStore();
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    fecha_de_nacimiento: "",
    tel:"",
    email:"",
    password:"",
    nivel:"",
    imagen: "",
    escuela: "",
    profesor: "",
    graduacion: "",
    fecha_de_examen: "",
    estado: "Activo",
    eliminado: false,
  });
  const [file, setFile] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleFileChange = (e) =>{
    const selectedFile = e.target.files[0]
    setFile(selectedFile)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let urlImage = usuarioStore.imagen
      if(file){
        urlImage = await uploadImage(file)}
      const nuevoUsuario = await registerUser({ ...userData, imagen:urlImage})

      alert("Usuario creado con éxito");
      Navigate("/pc_usuarios");
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
            Crear Nuevo Usuario
          </h2>
          
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
              { name: "nombre", label: "Nombre", placeholder: "Ingrese nombre" },
              { name: "apellido", label: "Apellido", placeholder: "Ingrese apellido" },
              {
                name: "fecha_de_nacimiento",
                type: "date",
                label: "Fecha de nacimiento",
              },
              { name: "tel", label: "Telefono", placeholder: "Ingrese numero de telefono" },
              { name: "email", label: "Correo electronico", placeholder: "Ingrese correo electronico" },
              { name: "password", label: "Contraseña", placeholder: "Ingrese contraseña" },
              { name: "nivel", label: "Nivel", placeholder: "Ingrese nivel" },
              { name: "escuela", label: "Escuela", placeholder: "Ingrese escuela" },
              { name: "profesor", label: "Profesor", placeholder: "Ingrese profesor" },
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
                  value={userData[field.name]}
                  placeholder={field.placeholder}
                  onChange={handleChange}
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition">
              Crear Usuario
            </button>

          </form>
          <div className="text-center">
            <Link to="/pc_usuarios">
              <button className="mt-4 text-blue-600 hover:underline">
                🡸 Volver
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default NewUsuario