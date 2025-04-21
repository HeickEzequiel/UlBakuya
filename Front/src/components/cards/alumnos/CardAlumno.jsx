function CardAlumno(props) {
  const graduacionColor = {
    blanca: 'border-gray-300',
    puntaamarilla:"border-gray-300 outline-2 outline-offset-2 outline-yellow-400",
    amarilla: 'border-yellow-400',
    puntaverde:"border-yellow-400 outline-2 outline-offset-2 outline-green-500",
    verde: 'border-green-500',
    puntaazul:"border-green-500 outline-2 outline-offset-2 outline-blue-500",
    azul: 'border-blue-500',
    puntaroja:"border-blue-500 outline-2 outline-offset-2 border-blue-500",
    roja: 'border-red-500',
    puntanegra:"border-red-500 outline-2 outline-offset-2 border-red-500",
    negra: 'border-black'
  };

  const bordeColor = graduacionColor[props.graduacion.toLowerCase().replace(/\s+/g, "")] || 'border-black';

  return (
    <div className={`bg-white shadow-lg rounded-xl p-4 max-w-md mx-auto my-10 border-4 ${bordeColor}`}>
      <img
        src={props.imagen}
        alt={`${props.nombre} ${props.apellido}`}
        className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border border-gray-400"
      />
      <h2 className="text-xl font-bold text-center mb-2 border-b border-gray-300 pb-2">
        {props.nombre} {props.apellido}
      </h2>
      <div className="mt-2 text-sm text-gray-800 space-y-2 divide-y divide-gray-200">
        <p className="pt-2"><span className="font-semibold">Fecha de nacimiento:</span> {props.fecha_de_nacimiento}</p>
        <p className="pt-2"><span className="font-semibold">Escuela:</span> {props.escuela}</p>
        <p className="pt-2"><span className="font-semibold">Graduación:</span> {props.graduacion}</p>
        <p className="pt-2"><span className="font-semibold">Fecha de examen:</span> {props.fecha_de_examen}</p>
        <p className="pt-2"><span className="font-semibold">Profesor:</span> {props.profesor}</p>
        <p className="pt-2"><span className="font-semibold">Estado:</span> {props.estado}</p>
      </div>
    </div>
  );
}

export default CardAlumno;