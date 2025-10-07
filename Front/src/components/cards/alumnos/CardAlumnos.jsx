import { Link } from "react-router-dom";

function CardAlumnos(props) {
  const { id, nombre, apellido, graduacion, escuela, profesor, estado } = props;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4 border border-gray-300">
      <div className="flex flex-col lg:flex-row md:items-center p-6">
        <div className="flex-1 mb-4 lg:mb-0">
          <p className="text-lg font-semibold text-gray-800">
            {nombre} {apellido}
          </p>

          <p className="text-sm text-gray-600">
            <strong>Escuela:</strong>{" "}
            {Array.isArray(escuela) && escuela.length > 0
              ? escuela.map((e) => e.nombre).join(" / ")
              : "Sin asignar"}
          </p>

          <p className="text-sm text-gray-600">
            <strong>Graduación:</strong> {graduacion}
          </p>

          <p className="text-sm text-gray-600">
            <strong>Profesor:</strong>{" "}
            {Array.isArray(profesor) && profesor.length > 0
              ? profesor.map((p) => `${p.nombre} ${p.apellido}`).join(" / ")
              : "Sin asignar"}
          </p>

          <p className="text-sm text-gray-600">
            <strong>Estado:</strong> {estado}
          </p>
        </div>

        <div className="flex flex-wrap gap-1 md:gap-4">
          <Link to={`/alumno/${id}`}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 md:px-4 md:py-2 rounded-lg shadow-md transition">
              Ver
            </button>
          </Link>
          <Link to={`/updatealumno/${id}`}>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 md:px-4 md:py-2 rounded-lg shadow-md transition">
              Modificar
            </button>
          </Link>
          <Link to={`/deletealumno/${id}`}>
            <button className="bg-red-500 hover:bg-red-600 text-white px-2 md:px-4 py-1 md:py-2 rounded-lg shadow-md transition">
              Eliminar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardAlumnos;
