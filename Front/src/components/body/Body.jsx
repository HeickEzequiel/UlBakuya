import { AdvancedImage } from "@cloudinary/react"
import { gyeomson, pilsung, ubk, ubuntu } from "../../config/cloudinary"

function Body() {
  const items = [
    { title: 'Cursos', description: 'Cursos de estandarización y perfeccionamiento' },
    { title: 'Eventos', description: 'Eventos especiales: Día del Niño, fin de año, entre otros' },
    { title: 'Torneos', description: 'Torneos y eventos deportivos realizados por la escuela' },
    { title: 'Exámenes', description: 'Exámenes de cinturones para seguir aprendiendo' },
  ]

  return (
    <div className="bg-transparent">
        <div className="flex justify-center gap-6 py-8 px-32 mt-24 mx-20 border-2  border-gray-300 rounded-lg shadow-lgs bg-white ">
            {items.map((item, index) => (
            <div
                key={index}
                className="relative flex flex-col items-center size-1/2 p-20 border-2 border-gray-300 rounded-lg shadow-lg transition-transform duration-300 bg-emerald-600 bg-cover hover:bg-none hover:-translate-y-2 hover:shadow-xl hover:bg-green-300">
                

                <p className="absolute top-0 h-full w-full border-2 border-black text-white text-4xl font-bold rounded-lg text-opacity-100 hover:text-opacity-0 ">
                    {item.title}
                </p>
          
                <div className="absolute border-2 border-black h-full  opacity-0 hover:opacity-100 top-0 text-gray-700">
                    <p className="text-lg mx-4 mt-12">
                    {item.description}
                    </p>
                </div>
            </div>
            ))}
        </div>

        <div className='relative my-24 mx-20 border-2 border-gray-300 rounded-lg shadow-lgs bg-white'>
            <p className='text-center text-6xl font-cursiva font-bold underline underline-offset-8 text-black my-24'>Escuelas asociadas</p>
            <div className='relative flex size-48 mx-80 -top-16 left-1'>
                <AdvancedImage cldImg={ubk} className= 'mx-4 my-4 hover:-translate-y-1 hover:scale-110 duration-300'/>
                <AdvancedImage cldImg={pilsung} className= 'mx-4 my-4 hover:-translate-y-1 hover:scale-110 duration-300'/>
                <AdvancedImage cldImg={gyeomson} className= 'mx-4 my-4 hover:-translate-y-1 hover:scale-110 duration-300'/>
                <AdvancedImage cldImg={ubuntu} className= 'mx-4 my-4 hover:-translate-y-1 hover:scale-110 duration-300'/>
            </div>
        </div>

        <div className="py-8 px-20 mx-20 my-8 bg-gray-100 border-2 border-gray-300 rounded-lg shadow-lgs">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">¿Qué es el Taekwondo?</h1>
            <p className="text-gray-700  mb-6">
                El <strong>Taekwondo</strong> es un arte marcial de origen coreano que combina técnicas de combate, defensa personal, disciplina mental y desarrollo físico. Su nombre significa:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 ml-48">
                <li><strong>Tae (태)</strong>: Pie o patada</li>
                <li><strong>Kwon (권)</strong>: Puño o golpe</li>
                <li><strong>Do (도)</strong>: Camino o disciplina</li>
            </ul>
            <p className="text-gray-700 mb-6">
                Este deporte se caracteriza por sus poderosas patadas, rapidez y precisión en los movimientos, así como por su énfasis en valores como el respeto, la perseverancia y el autocontrol.
            </p>
            <h1 className="text-2xl font-semibold text-center text-blue-500 mb-4">Beneficios del Taekwondo</h1>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-48">
                <li><strong>Mejora la condición física:</strong> Aumenta la fuerza, flexibilidad y resistencia.</li>
                <li><strong>Fomenta la disciplina:</strong> Refuerza el autocontrol y la concentración.</li>
                <li><strong>Defensa personal:</strong> Enseña técnicas efectivas para situaciones de riesgo.</li>
                <li><strong>Desarrollo mental y emocional:</strong> Ayuda a fortalecer la confianza y la autoestima.</li>
            </ul>
            <p className="text-gray-700  mt-6">
                El Taekwondo es más que un deporte, es un estilo de vida que promueve el crecimiento personal y el respeto hacia los demás. ¡Descubre todo lo que esta disciplina puede ofrecerte!
            </p>
        </div>
        <button className="relative px-6 py-3 left-96 ml-72 mt-10 my-10 text-lg font-semibold text-white bg-green-500 rounded-lg shadow-md transition duration-300 hover:bg-green-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2">
        Quiero inscribirme!!
        </button>

     
    </div>
    )
}

export default Body
