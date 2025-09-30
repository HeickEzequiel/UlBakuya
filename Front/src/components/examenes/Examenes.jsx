import Nav from "../nav/Nav"
import Footer from "../footer/Footer"
import userStore from "../../store/loginStore"
import UserNav from "../usernav/UserNav"
import { Link } from "react-router-dom"

function Examenes() {
  const { isLogged, user } = userStore()
  return (
    <div>
      <Nav/>
      {isLogged ? <UserNav/> : <div className='relative flex items-center p-4 w-full '></div>}
      <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Exámenes de Graduación en Taekwon-Do ITF
        </h1>
      <p className="text-gray-700 mb-4">
        En Taekwon-Do ITF, los exámenes de graduación son evaluaciones en las que los practicantes demuestran su progreso para obtener un nuevo cinturón. Estos exámenes varían según el nivel, pero generalmente incluyen los siguientes aspectos:
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-4"> Aspectos evaluados</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li><strong>Técnicas básicas:</strong> Posiciones (sogui), Bloqueos (makgi), Golpes de mano (jirugi, taerigi), Patadas (chagi).</li>
        <li><strong>Tul (Formas o patrones):</strong> Precisión, potencia, postura, equilibrio y respiración.</li>
        <li><strong>Técnicas de combate:</strong> 
          <ul className="list-disc list-inside ml-6">
            <li>Combate preestablecido: Movimientos coordinados con un compañero.</li>
            <li>Combate libre (matsogi): Aplicación de técnicas en una situación dinámica.</li>
          </ul>
        </li>
        <li><strong>Rotura de tablas (Kyokpa):</strong> Demuestra precisión, potencia y control (desde cierto nivel).</li>
        <li><strong>Defensa personal (Hosin Sul):</strong> Técnicas de defensa ante agarres, ataques con armas o situaciones reales.</li>
        <li><strong>Conocimiento teórico:</strong> Historia del Taekwon-Do, significado de los tul y cinturones, principios del Taekwon-Do.</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-6"> Duración y formato</h2>
      <p className="text-gray-700">Suele durar entre 60 y 120 minutos, dependiendo del número de participantes. Puede ser individual o en grupo.</p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6"> Consejos para aprobar el examen</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Practica tus <strong>tul</strong> con precisión y energía.</li>
        <li>Perfecciona tu técnica de combate y defensa personal.</li>
        <li>Mantén una buena actitud y muestra respeto.</li>
        <li>Conoce bien la teoría y el significado de los movimientos.</li>
        <li>Controla la respiración y la postura.</li>
      </ul>

      <p className="text-lg font-medium text-gray-900 mt-6">
        ¿Estás por rendir un examen? ¿Para qué cinturón? 😃
      </p>
      <Link to='/inscripciones'><button className="relative px-6 py-3 left-96 ml-72 mt-10 my-10 text-lg font-semibold text-white bg-green-500 rounded-lg shadow-md transition duration-300 hover:bg-green-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2" type='button'>Inscribite</button></Link>
      </div>
      <Footer/>
    </div>
  )
}

export default Examenes