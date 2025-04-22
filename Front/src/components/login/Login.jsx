import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import userStore from "../../store/loginStore";
import api from "../../api/ubk";
import validation from "../../../utils/validation";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";

function Login() {
  const navigate = useNavigate();
  const { login } = userStore();
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    email: "Ingrese su email",
    password: "Ingrese su contraseña"
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value
    });
    setErrors(
      validation({
        ...userData,
        [name]: value
      })
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = userData;
    try {
      const response = await api.post("/login", { email, password });
      login(response.data);
      localStorage.setItem("userData", JSON.stringify(response.data));
      navigate("/");
      toast.success("Inicio de sesión exitoso");
    } catch (error) {
      toast.error("Correo o contraseña incorrecta");
    }
  };

  const handleNewUser = () => {
    navigate("/newuser");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <Nav />
      <main className="flex justify-center items-center flex-1">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md border border-gray-300">
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">Inicia Sesión</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                name="email"
                value={userData.email}
                placeholder="Email"
                onChange={handleChange}
              />
              {/* <p className="text-red-500 text-sm mt-1">{errors.email}</p> */}
            </div>
            <div>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="password"
                name="password"
                value={userData.password}
                placeholder="Contraseña"
                onChange={handleChange}
              />
              {/* <p className="text-red-500 text-sm mt-1">{errors.password}</p> */}
            </div>
            <button
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
              type="submit"
              disabled={errors.email || errors.password}
            >
              Ingresar
            </button>
            <div className="text-center text-gray-500 font-semibold">Ó</div>
            <button
              className="w-full border border-blue-600 text-blue-600 py-2 rounded-md hover:bg-blue-50 transition"
              type="button"
              onClick={handleNewUser}
            >
              Registrarse
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
