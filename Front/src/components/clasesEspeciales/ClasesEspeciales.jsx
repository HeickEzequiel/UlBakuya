import Nav from "../nav/Nav"
import Footer from "../footer/Footer"
import userStore from "../../store/loginStore"
import UserNav from "../usernav/UserNav"
import { Link } from "react-router-dom"

function ClasesEspeciales() {
    const { isLogged, user } = userStore()
    return (
        <div>
            <Nav/>
            {isLogged ? <UserNav/> : <div className='relative flex items-center p-4 w-full '></div>}
            <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                    Clases Especiales de Taekwon-Do ITF
                </h1>
                <p className="text-gray-700 mb-4">
                    A lo largo del año, se organizan clases especiales en las que los alumnos pueden disfrutar de entrenamientos diferentes, dinámicos y llenos de espíritu marcial. Estas clases fomentan el compañerismo y la diversión en la práctica del Taekwon-Do.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-4">🔹 Tipos de clases especiales</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li><strong>Clase del Día del Niño:</strong> Juegos, desafíos y actividades recreativas para los más pequeños.</li>
                    <li><strong>Clase de Fin de Año:</strong> Despedida del año con entrenamientos especiales y entrega de reconocimientos.</li>
                    <li><strong>Clase Temática:</strong> Sesiones dedicadas a la historia del Taekwon-Do o a técnicas específicas.</li>
                    <li><strong>Clase Familiar:</strong> Entrenamiento abierto a familiares para compartir la experiencia del Taekwon-Do.</li>
                    <li><strong>Clase Pre-Dan:</strong> Entrenamiento especial para prepararse mental y fisicamente para el examen de cinturon negro.</li>
                </ul>

                <h2 className="text-xl font-semibold text-gray-800 mt-6">🔹 Beneficios</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>✅ Fomenta el compañerismo y la integración del grupo.</li>
                    <li>✅ Brinda un espacio de diversión y aprendizaje.</li>
                    <li>✅ Permite explorar nuevas formas de entrenamiento.</li>
                    <li>✅ Refuerza el espíritu marcial y los valores del Taekwon-Do.</li>
                    <li>✅ Crea recuerdos inolvidables en la comunidad de practicantes.</li>
                </ul>

                <p className="text-lg font-medium text-gray-900 mt-6">
                    ¿Cuál de estas clases te gustaría vivir? 🎉🥋
                </p>
                <Link to='/inscripciones'><button className="lg:relative lg:bottom-9 lg:left-96 lg:ml-20 boton" type='button'>Inscribite</button></Link>
            </div>

            <Footer/>
        </div>
    )
}

export default ClasesEspeciales
