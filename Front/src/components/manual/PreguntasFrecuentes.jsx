import React from "react";

function PreguntasFrecuentes() {
  return (
    <section className="bg-white rounded-2xl shadow-md p-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Preguntas Frecuentes</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800"> ¿Cómo son las técnicas de lucha en el Taekwon-do?</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Las técnicas son seguras y efectivas, con golpes, patadas, bloqueos y esquives ejecutados de forma fluida y dinámica. Se planifican cuidadosamente para garantizar la seguridad y efectividad.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800">¿Quién puede practicar Taekwon-do?</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Cualquier persona puede practicar Taekwon-do, sin distinción de sexo o edad. Los movimientos se adaptan según el nivel de cada practicante.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800">¿Existe combate en la clase de Taekwon-do?</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Sí, pero es opcional. El combate se desarrolla bajo estrictas normas de protocolo y cortesia, minimizando el riesgo de lesiones.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800">¿Cuáles son los beneficios que otorga la práctica de Taekwon-do?</h3>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
            <li>Quema de grasa</li>
            <li>Aumento de tono y resistencia muscular</li>
            <li>Mejoras cardio-respiratorias</li>
            <li>Mayor coordinación, flexibilidad y equilibrio</li>
            <li>Descarga de tensiones y liberación del estrés</li>
            <li>Incremento de seguridad y autoestima</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800">Plan de enseñanza</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Las clases están a cargo de instructores especializados. Se promueve la participación en torneos, cursos y seminarios, sin evaluaciones tradicionales.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800">Objetivos específicos y generales</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Se busca fomentar la integración comunitaria, el desarrollo de capacidades individuales, y ofrecer un centro educativo con altos valores humanos y docentes.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800">Participación</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Los alumnos pueden alejarse y reincorporarse, pero deben cumplir un régimen de asistencia para las promociones y asumir responsabilidades al alcanzar grados de Dan.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PreguntasFrecuentes;
