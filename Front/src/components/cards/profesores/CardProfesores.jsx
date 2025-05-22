function CardProfesores(props) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col items-center gap-4 hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-40 h-40 object-cover rounded-full border-4 border-gray-300 shadow-sm hover:scale-105 transition-transform duration-300"
        src={props.imagen}
        alt={`Foto de ${props.nombre}`}
      />
      <div className="text-center">
        <h1 className="text-xl font-bold text-gray-800 tracking-tight">
          {props.nombre} {props.apellido}
        </h1>
        <h2 className="text-md text-gray-500 mt-1 font-medium">
          {props.graduacion}
        </h2>
      </div>
    </div>
  );
}

export default CardProfesores;