import { Link } from "react-router-dom";
import { useFetchEventos } from "../../../hooks/useEventos";
import userStore from "../../../store/loginStore";
import Footer from "../../footer/Footer";
import Nav from "../../nav/Nav";
import UserNav from "../../usernav/UserNav";
import CardEventos from "../../cards/eventos/CardEventos";

function Eventos_PC() {
    const { data: eventos, isLoading, error } = useFetchEventos()
    const { isLogged, user } = userStore()
    if(isLoading){
      return (
        <div>
          <Nav/>
          <div className='text-center py-12'>Cargando...</div>
          <Footer/>
        </div>
      )
    }
    if(error){
      return(
      <div> 
          <Nav/> 
          {error.response.status===404 ?(
            <div className='text-center py-12'> 
              <Link to='/newevento'>
                <button className="mb-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition">
                  Agregar Evento
                </button>
              </Link>
              <p className="absolute top-20">No existen Eventos cargados por favor ingresar el primero</p>
            </div>
          ):(
            <div className="text-center py-12">
              <div>Error: {error.message}</div>
            </div>
          )}
          <Footer />
        </div>
      );
    }
  
  
    return (
      <div>
        <Nav/>
          {isLogged && user.nivel==="Director"|| user.nivel==="Profesor"?
            <div>
              <UserNav/>
              <div className="min-h-screen px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between mb-6">
                  <Link to='/newevento'>
                    <button className="mb-4 md:mb-0 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md transition">
                      Agregar Evento
                    </button>
                  </Link>
                  {user.nivel==="Director" && (
                    <Link to='/eventos_eliminados'>
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg shadow-md transition">
                        Ver Eliminados
                      </button>
                    </Link>
                  )}
                </div>
  
                <div className='min-w-full table-auto border-collapse border border-gray-300 mb-8'>
                    {eventos && eventos.map((evento, key) =>
                    !evento.eliminado && (
                      <CardEventos
                        key={key}
                        id={evento.id}
                        tipo_de_evento={evento.tipo_de_evento}
                        fecha_del_evento={evento.fecha_del_evento}
                        horarios={evento.horarios}
                        club={evento.club}
                        direccion={evento.direccion}
                        imagen={dojan.imagen}
                        estado={dojan.estado}
                        eliminado={dojan.eliminado}
                      />
                    )
                    )}
                </div>
              </div>
            </div>: <p className="text-center py-12 text-xl">Debes iniciar sesion como administrador para acceder al panel de control</p>
          }
        <Footer/>
      </div>
    )
}

export default Eventos_PC