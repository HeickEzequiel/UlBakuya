import userStore from '../../store/loginStore.js';
import { Link } from 'react-router-dom';

function Nav() {
  const { isLogged, logout } = userStore();

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-lime-400 text-3xl font-extrabold tracking-wide hover:opacity-90 transition">
          FIT
        </Link>

        {/* Título */}
        <h1 className="hidden md:block text-white text-lg md:text-xl font-semibold tracking-tight">
          Formación Integral de Taekwondo
        </h1>

        {/* Navegación */}
        <nav className="flex items-center space-x-4 md:space-x-6">
          <Link to="/" className="text-white font-medium hover:text-lime-400 transition-transform transform hover:-translate-y-1 hover:scale-105">
            Home
          </Link>
          <Link to="/asociacion" className="text-white font-medium hover:text-lime-400 transition-transform transform hover:-translate-y-1 hover:scale-105">
            La Asociación
          </Link>
          <Link to="/profesores" className="text-white font-medium hover:text-lime-400 transition-transform transform hover:-translate-y-1 hover:scale-105">
            Profesores
          </Link>
          <Link to="/dojan" className="text-white font-medium hover:text-lime-400 transition-transform transform hover:-translate-y-1 hover:scale-105">
            Lugares
          </Link>

          {!isLogged ? (
            <Link to="/login" className="relative left-36 text-white font-semibold border border-lime-400 px-3 py-1 rounded-xl hover:bg-lime-400 hover:text-black transition duration-300">
              Ingresar
            </Link>
          ) : (
            <>
              <Link to="/perfil" className="relative left-36 text-white font-medium hover:text-lime-400 transition-transform transform hover:-translate-y-1 hover:scale-105">
                Perfil
              </Link>
              <button onClick={logout} className="relative left-36 text-white font-medium border border-red-400 px-3 py-1 rounded-xl hover:text-red-400 transition-transform transform hover:-translate-y-1 hover:scale-105">
                Desconectarse
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Nav;

