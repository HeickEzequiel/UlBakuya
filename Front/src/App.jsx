import { Route, Routes} from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/login/Login'
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
import Paneldecontrol from './components/paneldecontrol/Paneldecontrol'
import Newalumno from './components/newalumno/Newalumno'
import AlumnoDetail from './components/details/AlumnoDetail'
import AlumnoUpdate from './components/update/AlumnoUpdate'
import Asociacion from './components/asociacion/Asociacion'
import DeleteAlumno from './components/delete/DeleteAlumno'
import Eliminados from './components/paneldecontrol/Eliminados'

function App() {

  return (
    <div className=''>
        
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/asociacion" element={<Asociacion/>}/>
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
        <Route path='/updatealumno/:id' element={<AlumnoUpdate/>}/>
        <Route path='/deletealumno/:id' element={<DeleteAlumno/>}/>
        <Route path='/eliminados' element={<Eliminados/>}/>
      </Routes>

    </div>

  )
}

export default App
