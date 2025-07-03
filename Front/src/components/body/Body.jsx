import { AdvancedImage } from "@cloudinary/react";
import { gyeomson, pilsung, ubk, ubuntu } from "../../config/cloudinary";

function Body() {
  const items = [
    { title: 'Cursos', description: 'Cursos de estandarización y perfeccionamiento' },
    { title: 'Eventos', description: 'Eventos especiales: Día del Niño, fin de año, entre otros' },
    { title: 'Torneos', description: 'Torneos y eventos deportivos realizados por la escuela' },
    { title: 'Exámenes', description: 'Exámenes de cinturones para seguir aprendiendo' },
  ];

  return (
    <div className="text-zinc-950 bg-white">

      {/* Grid de items */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-16 px-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 border border-zinc-700 rounded-2xl shadow-md p-6 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <h2 className="text-xl font-bold text-lime-400 mb-4">{item.title}</h2>
            <p className="text-zinc-300 text-base">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Escuelas asociadas */}
      <div className="bg-white py-16 px-6 mt-12 shadow-inner">
        <h2 className="text-3xl font-bold text-center text-lime-700 mb-12 underline underline-offset-8">
          Escuelas asociadas
        </h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {[ubk, pilsung, gyeomson, ubuntu].map((img, idx) => (
            <AdvancedImage
              key={idx}
              cldImg={img}
              className="w-24 h-24 sm:w-32 sm:h-32 object-contain transition-transform duration-300 hover:scale-110"
            />
          ))}
        </div>
      </div>

      {/* Qué es el Taekwondo */}
      <div className="max-w-5xl mx-auto py-16 px-6 bg-zinc-100 mt-12 rounded-2xl border border-zinc-700 shadow-md">
        <h1 className="text-3xl font-bold text-center text-lime-700 mb-6">¿Qué es el Taekwondo?</h1>
        <p className="text-zinc-900 mb-6">
          El <strong>Taekwondo</strong> es un arte marcial de origen coreano que combina técnicas de combate, defensa personal, disciplina mental y desarrollo físico. Su nombre significa:
        </p>
        <ul className="list-disc list-inside text-zinc-900 mb-6 ml-4 sm:ml-12">
          <li><strong>Tae (태)</strong>: Pie o patada</li>
          <li><strong>Kwon (권)</strong>: Puño o golpe</li>
          <li><strong>Do (도)</strong>: Camino o disciplina</li>
        </ul>
        <p className="text-zinc-900 mb-6">
          Este deporte se caracteriza por sus poderosas patadas, rapidez y precisión en los movimientos, así como por su énfasis en valores como el respeto, la perseverancia y el autocontrol.
        </p>

        <h2 className="text-2xl font-semibold text-center text-lime-700 mb-4">Beneficios del Taekwondo</h2>
        <ul className="list-disc list-inside text-zinc-900 space-y-2 ml-4 sm:ml-12">
          <li><strong>Mejora la condición física:</strong> Aumenta la fuerza, flexibilidad y resistencia.</li>
          <li><strong>Fomenta la disciplina:</strong> Refuerza el autocontrol y la concentración.</li>
          <li><strong>Defensa personal:</strong> Enseña técnicas efectivas para situaciones de riesgo.</li>
          <li><strong>Desarrollo mental y emocional:</strong> Ayuda a fortalecer la confianza y la autoestima.</li>
        </ul>
        <p className="text-zinc-900 mt-6">
          El Taekwondo es más que un deporte, es un estilo de vida que promueve el crecimiento personal y el respeto hacia los demás. ¡Descubrí todo lo que esta disciplina puede ofrecerte!
        </p>
      </div>

      {/* Botón final */}
      <div className=" bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 flex justify-center my-32  mx-70 rounded-2xl">
        <button className="px-8 py-4 text-md font-semibold text-black bg-lime-400 rounded-2xl shadow-lg transition duration-300 hover:bg-lime-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2">
          ¡Quiero inscribirme!
        </button>
      </div>
    </div>
  );
}

export default Body;
