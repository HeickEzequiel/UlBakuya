import Nav from "../nav/Nav"
import Footer from "../footer/Footer"
import userStore from "../../store/loginStore"
import UserNav from "../usernav/UserNav"
import { Link } from "react-router-dom"

function Torneos() {
    const { isLogged, user } = userStore()
    return (
        <div>
            <Nav/>
            {isLogged ? <UserNav/> : <div className='relative flex items-center p-4 w-full '></div>}
            <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                    Torneos de Taekwon-Do ITF
                </h1>
                <p className="text-gray-700 mb-4">
                    Los torneos de Taekwon-Do ITF son eventos donde los practicantes compiten en diversas categorías, demostrando sus habilidades y espíritu marcial. Estos torneos incluyen varias modalidades de competencia:
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-4">🔹 Modalidades de competencia</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li><strong>Tul (Formas o patrones):</strong> Evaluación de precisión, potencia, postura y equilibrio.</li>
                    <li><strong>Combate (Matsogi):</strong> Peleas organizadas por categorías de edad, peso y graduación.</li>
                    <li><strong>Rotura de tablas (Kyokpa):</strong> Pruebas de fuerza, precisión y control.</li>
                    <li><strong>Técnicas especiales:</strong> Patadas acrobáticas a objetivos elevados o a distancia.</li>
                    <li><strong>Defensa personal (Hosin Sul):</strong> Demostraciones de habilidades en situaciones simuladas.</li>
                </ul>

                <h2 className="text-xl font-semibold text-gray-800 mt-6">🔹 Reglas y categorías</h2>
                <p className="text-gray-700">Las reglas y categorías varían según la organización, pero suelen estar divididas por edad, género y nivel de experiencia.</p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6">🔹 Consejos para competir</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>✅ Entrena con disciplina y enfócate en mejorar tu técnica.</li>
                    <li>✅ Mantén la calma y confía en tu preparación.</li>
                    <li>✅ Respeta a tus compañeros y árbitros.</li>
                    <li>✅ Conoce bien las reglas del torneo.</li>
                    <li>✅ Controla tu respiración y mantén una mentalidad fuerte.</li>
                </ul>

                <p className="text-lg font-medium text-gray-900 mt-6">
                    ¿Vas a participar en un torneo pronto? ¿En qué categoría? 🏆
                </p>
                <Link to='/inscripciones'><button className="lg:relative lg:bottom-9 lg:left-96 lg:ml-32 boton" type='button'>Inscribite</button></Link>
            </div>

            <Footer/>
        </div>
    )
}

export default Torneos
