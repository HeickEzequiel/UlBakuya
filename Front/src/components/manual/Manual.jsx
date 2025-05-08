import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import UserNav from "../usernav/UserNav";
import Introduccion from "./Introduccion";
import SistemaDeEntrenamiento from "./SistemaDeEntrenamiento";
import PreguntasFrecuentes from "./PreguntasFrecuentes";
import TeoriaDeCinturones from "./TeoriaDeCinturones";
import HistoriaDelTaekwondo from "./HistoriaDelTaekwondo";
import OtrosConceptos from "./OtrosConceptos";
import userStore from "../../store/loginStore";

function Manual() {
  const { isLogged } = userStore();
  return (
    <div className="bg-gray-50 min-h-screen">
      <Nav />
      {isLogged ? <UserNav /> : <div className="h-16" />}
      <main className="px-6 md:px-28 py-10 space-y-12">
        <Introduccion />
        <SistemaDeEntrenamiento />
        <PreguntasFrecuentes />
        <TeoriaDeCinturones />
        <HistoriaDelTaekwondo />
        <OtrosConceptos />
      </main>
      <Footer />
    </div>
  );
}

export default Manual;
