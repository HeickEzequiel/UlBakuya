import Footer from "../../footer/Footer.jsx";
import Nav from "../../nav/Nav.jsx";
import { useFetchEventos } from "../../../hooks/useEventos.js";
import UserNav from "../../usernav/UserNav.jsx";
import userStore from "../../../store/loginStore.js";
import CardInscripcionesEventos from "../../cards/inscripciones/CardInscripcionesEventos.jsx";

function Inscripciones_Eventos() {
  const { data: eventos, isLoading, error } = useFetchEventos();
  const { isLogged } = userStore();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
        <p className="text-lg font-semibold text-gray-500 animate-pulse text-center">
          Cargando próximos eventos...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-red-50 px-4">
        <p className="text-lg font-semibold text-red-700 text-center">
          Error: {error.message}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Nav />
      {isLogged ? <UserNav /> : <div className="p-4" />}

      <main className="flex-grow px-4 sm:px-6 lg:px-12 xl:px-20 py-10">
        {eventos.length === 0 ? (
          <h1 className="text-center text-xl sm:text-2xl text-gray-400 font-medium">
            No hay nuevos eventos para inscribirse
          </h1>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10"
          >
            {eventos.map(
              (evento, key) =>
                !evento.eliminado && (
                  <CardInscripcionesEventos
                    key={key}
                    tipo_de_evento={evento.tipo_de_evento}
                    idEvento={evento.id}
                    fecha_del_evento={evento.fecha_del_evento}
                    horarios={evento.horarios}
                    club={evento.club}
                    direccion={evento.direccion}
                    imagen={evento.imagen}
                    estado={evento.estado}
                    eliminado={evento.eliminado}
                  />
                )
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Inscripciones_Eventos;