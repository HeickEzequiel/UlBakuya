function Introduccion() {
    return (
      <section className="bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Introducción</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Nuestro sistema educativo tiene como principal objetivo mejorar la calidad de vida de las personas, sus cualidades físicas y psíquicas.
          También brinda la posibilidad de formar instructores calificados que puedan enseñar esta disciplina transmitiendo la pasión, energía y filosofía de vida que el TAEKWON-DO propone.
          <br /><br />
          Somos conscientes de la responsabilidad que significa ser un instructor de TAEKWON-DO y la necesidad de estar muy bien preparado para dictar clases seguras que nunca pongan en peligro la salud de los participantes.
          Actualmente, las Artes Marciales han evolucionado tanto que no queda espacio para instructores improvisados.
          <br /><br />
          Por ello, nuestros instructores aprenden a planificar cada clase metodológicamente, garantizando un entrenamiento seguro y efectivo. Esta disciplina está dirigida al público en general, ofreciendo una actividad complementaria que expande sus posibilidades, desarrollando un sistema de entrenamiento serio, fundamentado, y en sintonía con la filosofía de las Artes Marciales y el deporte.
        </p>
  
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Nuestro sistema se divide en varias áreas:</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 text-lg">
            <li>Entrenamiento Continuo</li>
            <li>Graduaciones - Exámenes</li>
            <li>Actualizaciones - Cursos - Seminarios</li>
            <li>Competencias</li>
          </ol>
        </div>
  
        <div className="mt-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            Las clases incluyen un <strong>Área Técnica</strong> que abarca el estudio y práctica de la técnica, y un <strong>Área Teórica</strong>, donde se estudian aspectos del Taekwon-do, Anatomía, Fisiología y Biomecánica aplicada.
            Además, el <strong>Área de Instrucción</strong> asegura que la clase sea bien enseñada, aplicando pedagogía, didáctica y fomentando la comunicación con los alumnos.
            <br /><br />
            Nuestro sistema garantiza la formación de entrenadores de excelencia, quienes deben aprobar un examen riguroso para su certificación.
          </p>
        </div>
      </section>
    );
  }
  
  export default Introduccion;
  