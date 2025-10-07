import { useState } from "react";
import userStore from '../../store/loginStore.js';
import { Link } from 'react-router-dom';

function Nav() {
  const { isLogged, logout } = userStore();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 shadow-md mb-2">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link to="/" className="text-lime-400 text-3xl font-extrabold tracking-wide hover:opacity-90 transition">
          FIT
        </Link>

        <h1 className="  md:block text-white text-sm md:text-xl font-semibold tracking-tight">
          Formación Integral de Taekwondo
        </h1>

        

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`absolute flex-col top-18 z-50 left-0 w-full transition-all duration-300 bg-gray-700 md:flex-row md:flex md:items-center md:space-x-4 md:static md:w-auto md:bg-transparent ${menuOpen ? "flex" : "hidden"}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/asociacion" className="nav-link">La Asociación</Link>
          <Link to="/profesores" className="nav-link">Profesores</Link>
          <Link to="/dojan" className="nav-link">Centros de entrenamiento</Link>
          
          {!isLogged ? (
            <Link to="/login" className="btn-primary mt-2 md:mt-0 md:ml-2">
              Ingresar
            </Link>
          ) : (
            <>
              <Link to="/perfil" className="nav-link mt-2 md:mt-0 md:ml-10">Perfil</Link>
              <Link to='/manual' className="nav-link mt-2 md:hidden">Manual del practicante</Link>
              <Link to='/examenes' className="nav-link mt-2 md:hidden">Examenes</Link>
              <Link to='/torneos' className="nav-link mt-2 md:hidden">Torneos</Link>
              <Link to='/seminarios' className="nav-link mt-2 md:hidden">Cursos Tecnicos</Link>
              <Link to='/clasesespeciales'className="nav-link mt-2 md:hidden">Clases Especiales</Link>
              
              <button className=' md:hidden btn-primary'>
                <Link to='/paneldecontrol'>Panel de control</Link>
              </button>
              
              <button
                onClick={logout}
                className="btn-danger my-2 md:mt-0 md:ml-2">
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