import React from 'react'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
import userStore from '../../store/loginStore'
import UserNav from '../usernav/UserNav'
import { Link } from 'react-router-dom'

function Seminarios() {
    const { isLogged, user } = userStore()
    return (
        <div>
            <Nav/>
            {isLogged ? <UserNav/> : <div className='relative flex items-center p-4 w-full '></div>}
            <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                    Cursos Técnicos de Taekwon-Do ITF
                </h1>
                <p className="text-gray-700 mb-4">
                    Los cursos técnicos de Taekwon-Do ITF son capacitaciones especializadas dirigidas a practicantes y entrenadores que desean perfeccionar sus conocimientos y habilidades en diversas áreas del arte marcial.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-4">Tipos de cursos</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li><strong>Curso de Tul:</strong> Enfoque detallado en la ejecución correcta de los patrones.</li>
                    <li><strong>Curso de Combate:</strong> Estrategias, técnicas avanzadas y táctica en el combate.</li>
                    <li><strong>Curso de Arbitraje:</strong> Formación en reglamento, puntuación y toma de decisiones.</li>
                    <li><strong>Curso de Defensa Personal:</strong> Técnicas avanzadas para situaciones de defensa real.</li>
                    <li><strong>Curso de Preparación Física:</strong> Métodos de entrenamiento para mejorar fuerza, resistencia y flexibilidad.</li>
                </ul>

                <h2 className="text-xl font-semibold text-gray-800 mt-6">Beneficios</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Mejora técnica y conocimiento profundo de Taekwon-Do.</li>
                    <li>Certificación oficial y reconocimiento internacional.</li>
                    <li>Mayor preparación para exámenes de grado y competencias.</li>
                    <li>Oportunidad de entrenar con instructores de alto nivel.</li>
                    <li>Desarrollo de habilidades de enseñanza y liderazgo.</li>
                </ul>

                <p className="text-lg font-medium text-gray-900 mt-6">
                    ¿Te interesa participar en un curso? ¿Cuál te gustaría tomar? 📚
                </p>
                <Link to='/inscripciones'><button className="relative px-6 py-3 left-96 ml-72 mt-10 my-10 text-lg font-semibold text-white bg-green-500 rounded-lg shadow-md transition duration-300 hover:bg-green-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2" type='button'>Inscribite</button></Link>
            </div>

            <Footer/>
        </div>
    )
}

export default Seminarios