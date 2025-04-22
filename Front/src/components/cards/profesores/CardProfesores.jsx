function CardProfesores(props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col lg:flex-row items-center gap-6 lg:w-1/2 mx-auto hover:shadow-xl transition-shadow">
      <img
        className="w-60 h-60 object-cover rounded-full border-4 border-black"
        src={props.imagen}
        alt="Foto del profesor"
      />
      <div className="text-center lg:text-left">
        <h1 className="text-2xl font-semibold text-gray-800">
          {props.nombre} {props.apellido}
        </h1>
        <h2 className="text-lg text-gray-600 mt-2">{props.graduacion}</h2>
      </div>
    </div>
  );
}

export default CardProfesores;
