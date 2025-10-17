import { Link } from "react-router-dom";

function CardInscripciones(props) {
  return (
    <Link to="/newInscripcion" state={props}>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:scale-[1.02] transition duration-300 flex flex-col md:flex-row w-full h-full border-2">
        
        <div className="w-full md:w-1/2 h-full md:h-auto relative bg-gray-100">
          <img
            src={props.imagen}
            alt={props.tipo_de_evento}
            className=" inset-0 w-full h-full object-cover"
          />
        </div>

        
        <div className="p-4 sm:p-6 flex flex-col bg-amber-100 md:border-2 md:rounded-r-2xl justify-center md:w-1/2 gap-2">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
            {props.tipo_de_evento}
          </h2>
          <p className="text-sm sm:text-base">
            <span className="text-gray-600 font-semibold">Fecha: </span>
            {new Date(props.fecha_del_evento).toLocaleDateString("es-ES", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-700">Horarios:</h3>
            <ul className="text-sm list-disc list-inside text-gray-800">
              {props.horarios.map((hora, index) => (
                <li key={index}>{hora}</li>
              ))}
            </ul>
          </div>
          <p className="text-sm sm:text-base">
            <span className="text-gray-600 font-semibold">Lugar: </span>
            {props.club}
          </p>
          <p className="text-sm sm:text-base">
            <span className="text-gray-600 font-semibold">Dirección: </span>
            {props.direccion}
          </p>
          <p className="text-xs sm:text-sm text-green-600 italic mt-2">
            Estado: {props.estado}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CardInscripciones;
