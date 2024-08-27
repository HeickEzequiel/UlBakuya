import { Route, Routes} from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Escuela from './components/escuela/Escuela'
import Profesores from './components/profesores/Profesores'
import Dojan from './components/dojan/Dojan'
import Proximamente from './components/proximamente/Proximamente'
import Newuser from './components/newuser/Newuser'
import Perfil from './components/perfil/Perfil'
import Manual from './components/manual/Manual'
import Torneos from './components/torneos/Torneos'
import Seminarios from './components/seminarios/Seminarios'
import ClasesEspeciales from './components/clasesEspeciales/ClasesEspeciales'
import Examenes from './components/examenes/Examenes'
import Paneldecontrol from './components/panelDeControl/Paneldecontrol'
import Newalumno from './components/newalumno/Newalumno'
import AlumnoDetail from './components/details/AlumnoDetail'

function App() {

  return (
    <div className=''>
        
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/escuela" element={<Escuela/>}/>
        <Route path="/profesores" element={<Profesores/>}/>
        <Route path="/dojan" element={<Dojan/>}/>
        <Route path='/Proximamente' element={<Proximamente/>}/>
        <Route path='/newuser' element={<Newuser/>}/>
        <Route path='/perfil' element={<Perfil/>}/>
        <Route path='/manual' element={<Manual/>}/>
        <Route path='/torneos' element={<Torneos/>}/>
        <Route path='/seminarios' element={<Seminarios/>}/>
        <Route path='/examenes' element={<Examenes/>}/>
        <Route path='/clasesespeciales' element={<ClasesEspeciales/>}/>
        <Route path='/paneldecontrol' element={<Paneldecontrol/>}/>
        <Route path='/newalumno' element={<Newalumno/>}/>
        <Route path='/alumno/:id' element={<AlumnoDetail/>}/>
      </Routes>

    </div>

  )
}

export default App
