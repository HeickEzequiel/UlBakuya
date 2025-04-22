function CardProfe(props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 w-full max-w-xl mx-auto hover:shadow-xl transition-shadow">
      <img
        src={props.imagen}
        alt="Foto del profesor"
        className="w-full h-64 object-contain rounded-xl border border-black mb-6"
      />
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        {props.nombre} {props.apellido}
      </h1>
      <p className="text-gray-600 mb-1"><span className="font-medium">Fecha de nacimiento:</span> {props.fecha_de_nacimiento}</p>
      <p className="text-gray-600 mb-1"><span className="font-medium">Escuela:</span> {props.escuela}</p>
      <p className="text-gray-600 mb-1"><span className="font-medium">Graduación:</span> {props.graduacion}</p>
      <p className="text-gray-600 mb-1"><span className="font-medium">Instructor Mayor:</span> {props.instructor_mayor}</p>
      <p className="text-gray-600"><span className="font-medium">Estado:</span> {props.estado}</p>
    </div>
  );
}

export default CardProfe;
