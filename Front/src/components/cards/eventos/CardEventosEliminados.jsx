import { Link, useNavigate } from "react-router-dom";
import api from "../../../api/ubk";

function CardEventosEliminados(props) {
  const { id, tipo_de_evento, fecha_del_evento, horarios, club, direccion, estado } = props;
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await api.get(`/logicrestoreevento/${id}`);
      alert("Evento restaurado");
      navigate("/pc_eventos");
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/deleteevento/${id}`);
      alert("Evento eliminado de la base de datos");
      navigate("/pc_eventos");
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  return (
    <div className="px-4 sm:px-6 py-2">

      {/* VISTA ESCRITORIO */}
      <div className="hidden md:block">
        <table className="w-full border-collapse border border-gray-300 shadow-md rounded-md overflow-hidden text-sm">
          <tbody>
            <tr className="even:bg-gray-100 hover:bg-gray-200 transition-colors">
              <td className="px-3 py-2 border border-gray-300">{tipo_de_evento}</td>
              <td className="px-3 py-2 border border-gray-300">{fecha_del_evento}</td>
              <td className="px-3 py-2 border border-gray-300">{horarios}</td>
              <td className="px-3 py-2 border border-gray-300">{club}</td>
              <td className="px-3 py-2 border border-gray-300">{direccion}</td>
              <td className="px-3 py-2 border border-gray-300">{estado}</td>

              <td className="px-2 py-1 text-center">
                <Link to={`/evento/${id}`}>
                  <button className="bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded">
                    Ver
                  </button>
                </Link>
              </td>
              <td className="px-2 py-1 text-center">
                <Link to={`/updateevento/${id}`}>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-semibold px-3 py-1 rounded">
                    Modificar
                  </button>
                </Link>
              </td>
              <td className="px-2 py-1 text-center">
                <button
                  onClick={handleClick}
                  className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded"
                >
                  Restaurar
                </button>
              </td>
              <td className="px-2 py-1 text-center">
                <button
                  onClick={handleDelete}
                  className="bg-red-500 hover:bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* VISTA MÓVIL */}
      <div className="block md:hidden border border-gray-300 rounded-lg shadow-md p-3 bg-white text-sm space-y-1">
        <div>
          <span className="font-semibold">Tipo:</span> {tipo_de_evento}
        </div>
        <div>
          <span className="font-semibold">Fecha:</span> {fecha_del_evento}
        </div>
        <div>
          <span className="font-semibold">Horarios:</span> {horarios}
        </div>
        <div>
          <span className="font-semibold">Club:</span> {club}
        </div>
        <div>
          <span className="font-semibold">Dirección:</span> {direccion}
        </div>
        <div>
          <span className="font-semibold">Estado:</span> {estado}
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          <Link to={`/evento/${id}`} className="flex-1">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white text-xs font-semibold py-1 rounded">
              Ver
            </button>
          </Link>

          <Link to={`/updateevento/${id}`} className="flex-1">
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

export default CardEventosEliminados;