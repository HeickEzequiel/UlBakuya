import React from 'react'
import { AdvancedImage } from '@cloudinary/react'
import Nav from '../nav/Nav'
import { farias, ubk,  } from '../../config/cloudinary'
import Footer from '../footer/Footer'

function Asociacion() {
  return (
    <div>
        <Nav/>
        <AdvancedImage cldImg={ubk} className= 'relative my-6 ml-52'/>
        <p>Escuela de takwondo Ul Bakuya</p> <br/>
        <AdvancedImage cldImg={farias} className= 'relative my-6 ml-52 rounded-full '/>
        <p>Director: Ariel Farias 7mo Dan</p> <br/>
        
        <p>Comencé mi práctica a fines de 1987 recibiéndome de cinturón negro 1er Dan el 20 de Abril de 1990. Ya como 3er Dan surgió la idea de crear mi propia Escuela, con ideales y lineamientos distintos, lo que fue tomando forma y quedó oficialmente plasmada con mi graduación a 4to Dan, el 23 de Julio de 2004.</p> <br/>
        <p>El concepto original se basaba en que el Mundo como tal, está en constante cambio, como la vida, y debemos adaptarnos sin perder nuestros principios y valores. En coreano, esa idea se traducía como 세상 을 바꾸 자; sesang eul bakku ja, “cambiar el mundo”, o “el mundo está cambiando”. Lograr la pronunciación correcta y retener el nombre en sí, se tornaba muy díficil en nuestro idioma español, por lo que se adaptó a la fonética y se acortó, optando por el definitivo Ul Bakuya.</p> <br/>
        <p>Como tal, se puede interpretar como “metamorfosis”, pero desde la idea de cambio y crecimiento. 
        Una vez establecido el nombre, se creó el logo, que sale de la primer imagen utilizada para promocionar la actividad en el año 1995, cuando comencé a dar clases con tan solo 15 años. Tanto el nombre como el logo fueron oportunamente registrados, y desde ese momento forman el pilar de nuestros ideales.</p> <br/>
        <Footer/>
    </div>
  )
}
export default Asociacion