import { Link } from "react-router-dom";
import userStore from "../../../store/loginStore";

function CardInscripcionesPc(props) {
  const user = userStore();

  return (
    <div
      className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300 w-full">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-4 sm:p-6 gap-4">
        <div className="flex-1 w-full">
          <p className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
            {props.tipo_de_evento}
          </p>
          <p className="text-sm sm:text-base text-gray-700 font-medium mb-2">
            {props.nombre} {props.apellido}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Fecha del evento:</span> {props.fecha_del_evento}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Horario:</span> {props.horarios}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Edad:</span> {props.edad}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Altura:</span> {props.altura}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Peso:</span> {props.peso}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Escuela:</span> {props.escuela}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Profesor:</span> {props.profesor}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Graduación actual:</span> {props.graduacion_actual}
            </p>
            {props.tipo_de_evento === "Examen" && (
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Próxima graduación:</span> {props.proxima_graduacion}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 w-full lg:w-auto justify-start lg:justify-end">
          <Link to={`/inscripcion/${props.id}`}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm shadow-md transition">
              Ver
            </button>
          </Link>

          {(user.nivel === "Director" || user.nivel === "Instructor mayor") && (
            <Link to={`/updateinscripcion/${props.id}`}>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm shadow-md transition">
                Modificar
              </button>
            </Link>
          )}

          {(user.nivel === "Director" || user.nivel === "Instructor mayor") && (
            <Link to={`/deleteinscripcion/${props.id}`}>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm shadow-md transition">
                Eliminar
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardInscripcionesPc;