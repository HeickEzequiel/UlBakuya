import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import UserNav from "../usernav/UserNav";
import userStore from "../../store/loginStore";
import { Link } from "react-router-dom";

function Paneldecontrol() {
  const { isLogged, user } = userStore();

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      {isLogged && (user.nivel === "Director" || user.nivel === "Profesor") ? (
        <>
          <UserNav />
          <main className="flex-1 px-4 sm:px-8 lg:px-16 py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-3xl font-semibold text-center text-gray-800 mb-10">
                Panel de Control
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { path: "/pc_usuarios", label: "Usuarios" },
                  { path: "/pc_alumnos", label: "Alumnos" },
                  { path: "/pc_profesores", label: "Profesores" },
                  { path: "/pc_escuelas", label: "Escuelas" },
                  { path: "/pc_dojanes", label: "Dojan" },
                  { path: "/pc_inscripciones", label: "Inscripciones" },
                  { path: "/pc_eventos", label: "Eventos" },
                ].map((item, idx) => (
                  <Link key={idx} to={item.path} className="w-full">
                    <div className="bg-blue-300 hover:bg-blue-100 border border-gray-700 text-gray-800 font-semibold py-5 px-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center">
                      {item.label}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </main>
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-xl text-gray-600 text-center px-4">
            Debes iniciar sesión como administrador para ver el panel de control
          </p>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Paneldecontrol;
