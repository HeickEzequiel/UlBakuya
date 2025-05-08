import React from "react";

function OtrosConceptos() {
  return (
    <section className="bg-white rounded-2xl shadow-md p-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Otros Conceptos Importantes</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">Material de Entrenamiento</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            El entrenamiento de Taekwon-do no requiere equipamiento costoso. Sin embargo, ciertos materiales como el dobok y protecciones básicas son esenciales para una práctica efectiva y segura.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800">El Dobok</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Introducido en 1982 por la ITF, el dobok representa la pureza, identidad y orgullo del estudiante de Taekwon-do.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800">Saludo y Conducta</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            El saludo ("Charyot" y "Kyong Ye") refleja respeto hacia instructores y compañeros. El comportamiento dentro y fuera del dojang debe ejemplificar los principios del Taekwon-do.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800">Deberes del Alumno</h3>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
            <li>Respetar las enseñanzas y al instructor.</li>
            <li>Ser ejemplo para cinturones inferiores.</li>
            <li>Participar activamente en la comunidad de la escuela.</li>
            <li>Aplicar las técnicas aprendidas con responsabilidad.</li>
          </ul>
        </div>

        
      </div>
    </section>
  );
}

export default OtrosConceptos;
