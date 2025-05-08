import React from "react";

function SistemaDeEntrenamiento() {
  return (
    <section className="bg-white rounded-2xl shadow-md p-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Sistema de Entrenamiento</h2>

      <p className="text-gray-700 leading-relaxed text-lg">
        El <strong>Entrenamiento Continuo</strong> es uno de los pilares principales del sistema educativo del Taekwon-do. Brinda a los practicantes e instructores la posibilidad de entrenar con elementos como bolsas, guantes de foco, palmetas y estrategias de combate real, asegurando confianza y credibilidad.
        <br /><br />
        Además, se entrenan la flexibilidad, fuerza y resistencia para lograr un óptimo estado físico. Este entrenamiento se lleva a cabo durante todo el año, con distintas frecuencias.
      </p>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Actualizaciones</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          Se realizan varias veces al año, ofreciendo talleres y clínicas de perfeccionamiento, elevando la calidad técnica y teórica de los alumnos.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Áreas de las Clases</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          Las clases están divididas en:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg mt-4">
          <li>Área Técnica: Estudio y práctica de las técnicas de Taekwon-do.</li>
          <li>Área Teórica: Anatomía, Fisiología y Biomecánica aplicadas.</li>
          <li>Área de Instrucción: Enseñanza pedagógica, comunicación y didáctica.</li>
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Adaptabilidad</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          El Taekwon-do está diseñado para adaptarse a personas de todas las edades y condiciones físicas. Esto garantiza que cualquier persona pueda practicarlo, sin distinción de sexo o edad.
        </p>
      </div>
    </section>
  );
}

export default SistemaDeEntrenamiento;
