import { Link, useNavigate } from "react-router-dom";
import api from "../../../api/ubk";

function CardAlumnosEliminados(props) {
  const id = props.id;
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await api.get(`/logicrestorealumno/${id}`);
      alert("Alumno restaurado");
      navigate("/paneldecontrol");
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/deletealumno/${id}`);
      alert("Alumno eliminado de la base de datos");
      navigate("/paneldecontrol");
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  return (
    <div className="px-4 sm:px-6 py-2 md:w-1/2 md:ml-20">

      <div className="block border border-gray-300 rounded-lg shadow-md p-3 bg-white text-sm space-y-1">
        <div>
          <span className="font-semibold">Nombre:</span> {props.nombre}
        </div>
        <div>
          <span className="font-semibold">Apellido:</span> {props.apellido}
        </div>
        <div>
          <span className="font-semibold">Escuela:</span> {props.escuela}
        </div>
        <div>
          <span className="font-semibold">Graduación:</span> {props.graduacion}
        </div>
        <div>
          <span className="font-semibold">Profesor:</span> {props.profesor}
        </div>
        <div>
          <span className="font-semibold">Estado:</span> {props.estado}
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          <Link to={`/alumno/${props.id}`} className="flex-1">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white text-xs font-semibold py-1 rounded">
              Ver
            </button>
          </Link>

          <Link to={`/updatealumno/${props.id}`} className="flex-1">
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-semibold py-1 rounded">
              Modificar
            </button>
          </Link>

          <button
            onClick={handleClick}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold py-1 rounded"
          >
            Restaurar
          </button>

          <button
            onClick={handleDelete}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white text-xs font-semibold py-1 rounded"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardAlumnosEliminados;