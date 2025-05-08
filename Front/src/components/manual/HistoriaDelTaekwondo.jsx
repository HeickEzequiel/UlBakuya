import React from "react";

function HistoriaDelTaekwondo() {
  return (
    <section className="bg-white rounded-2xl shadow-md p-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Historia del Taekwon-do</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">Fundación</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            El Taekwon-do fue proclamado el 11 de abril de 1955 por el General Choi Hong Hi, quien tras años de investigación y experimentación, lo presentó como un arte marcial coreano.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800">Federación Internacional</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            En 1966, Choi fundó la ITF (Federación Internacional de Taekwon-do) en Corea, con el apoyo de 9 países.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800">Introducción en Argentina</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            El Taekwon-do llegó a Argentina en 1967 gracias a los instructores coreanos Han Chang Kim, Nam Sun Choi y Kwang Duk Chung.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800">General Choi Hong Hi</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            General Choi fue un militar y diplomático coreano que dedicó su vida a la difusión del Taekwon-do. Publicó varias obras, incluyendo la Enciclopedia del Taekwon-do. Falleció en 2002 en Corea del Norte.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HistoriaDelTaekwondo;
