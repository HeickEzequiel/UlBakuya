import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import { useFetchEventos } from "../../hooks/useEventos.js";
import UserNav from "../usernav/UserNav.jsx";
import userStore from "../../store/loginStore.js";
import CardInscripciones from "../cards/inscripciones/CardInscripciones.jsx";

function Inscripciones() {
  const { data: eventos, isLoading, error } = useFetchEventos();
  const { isLogged, user } = userStore();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <p className="text-lg font-semibold text-gray-500 animate-pulse">Cargando próximos eventos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-red-50">
        <p className="text-lg font-semibold text-red-700">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Nav />
      {isLogged ? <UserNav /> : <div className="p-4" />}
      
      <main className="flex-grow p-4 ml-5 mt-10">
        {eventos.length === 0 ? (
          <h1 className="text-center text-2xl text-gray-400 font-medium">
            No hay nuevos eventos para inscribirse
          </h1>
        ) : (
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-22 mx-20">
            {eventos.map(
              (evento, key) =>
                !evento.eliminado && (
                  <CardInscripciones
                    key={key}
                    id={evento.id}
                    tipo_de_evento={evento.tipo_de_evento}
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

export default Inscripciones;