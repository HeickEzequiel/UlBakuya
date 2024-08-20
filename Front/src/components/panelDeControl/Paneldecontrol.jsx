import Nav from "../nav/Nav"
import Footer from "../footer/Footer"

function Paneldecontrol() {
  return (
    <div>
      <Nav/>
        <div className="min-h-screen">
          <button className="boton lg:relative lg:top-20 lg:left-24">Agregar Alumno</button>
          <table className="lg:relative lg:top-24 lg:left-24 lg:border-collapse lg:border-2 lg:border-black">
            <thead>
              <tr>
                <th className="celda">Nombre</th>
                <th className="celda">Apellido</th>
                <th className="celda">Escuela</th>
                <th className="celda">Graduación</th>
                <th className="celda">Profesor</th>
                <th className="celda">Rol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="celda">Ezequiel</td>
                <td className="celda">Heick</td>
                <td className="celda">Ul Bakuya</td>
                <td className="celda">3er Dan</td>
                <td className="celda">Ariel Farias</td>
                <td className="celda">Profesor</td>
                <td className="celda"> <button className="botonv">Ver</button></td>
                <td className="celda"> <button className="botonm">Modificar</button></td>
                <td className="celda"> <button className="botone">Eliminar</button></td>
              </tr>
              <tr>
                <td className="celda">Catherine</td>
                <td className="celda">Segovia</td>
                <td className="celda">Ul Bakuya</td>
                <td className="celda">1er Dan</td>
                <td className="celda">Ezequiel Heick</td>
                <td className="celda">Alumno</td>
                <td className="celda"> <button className="botonv">Ver</button></td>
                <td className="celda"> <button className="botonm">Modificar</button></td>
                <td className="celda"> <button className="botone">Eliminar</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      <Footer/>
    </div>
  )
}

export default Paneldecontrol