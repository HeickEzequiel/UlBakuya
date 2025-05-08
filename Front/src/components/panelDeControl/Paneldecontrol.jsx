import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import UserNav from "../usernav/UserNav";
import userStore from "../../store/loginStore";
import { Link } from "react-router-dom";

function Paneldecontrol() {
  const { isLogged, user } = userStore();

  return (
    <div>
      <Nav />
      {isLogged && (user.nivel === "Director" || user.nivel === "Profesor") ? (
        <div>
          <UserNav />
          <div className="min-h-screen px-6 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to='/pc_usuarios'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out w-full text-center">
                  Usuarios
                </button>
              </Link>
              <Link to='/pc_alumnos'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out w-full text-center">
                  Alumnos
                </button>
              </Link>
              <Link to='/pc_profesores'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out w-full text-center">
                  Profesores
                </button>
              </Link>
              <Link to='/pc_escuelas'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out w-full text-center">
                  Escuelas
                </button>
              </Link>
              <Link to='/pc_dojanes'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out w-full text-center">
                  Dojan
                </button>
              </Link>
              <Link to='/pc_inscripciones'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out w-full text-center">
                  Inscripciones
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-xl py-12">Debes iniciar sesión como administrador para ver el panel de control</p>
      )}
      <Footer />
    </div>
  );
}

export default Paneldecontrol;
          
          