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
import Newalumno from './components/new/Newalumno'
import AlumnoDetail from './components/details/AlumnoDetail'
import AlumnoUpdate from './components/update/AlumnoUpdate'
import Asociacion from './components/asociacion/Asociacion'
import DeleteAlumno from './components/delete/DeleteAlumno'
import Eliminados from './components/paneldecontrol/alumnos/Alumnos_Eliminados'
import Alumnos_PC from './components/paneldecontrol/alumnos/Alumnos_PC'
import Usuarios_PC from './components/paneldecontrol/usuarios/Usuarios_PC'
import UserDetail from './components/details/UserDatail'
import DeleteUser from './components/delete/DeleteUser'
import UserUpdate from './components/update/UserUpdate'
import NewUsuario from './components/new/NewUsuario'
import Profesores_PC from './components/paneldecontrol/profesores/Profesores_PC'
import NewProfesor from './components/new/NewProfesor'
import ProfesorDetail from './components/details/ProfesorDetail'
import DeleteProfesor from './components/delete/DeleteProfesor'
import ProfesorUpdate from './components/update/ProfesorUpdate'
import DojanDetail from './components/details/DojanDetail'
import Dojanes_PC from './components/paneldecontrol/dojanes/Dojanes_PC'
import DeleteDojan from './components/delete/DeleteDojan'
import DojanesUpdate from './components/update/DojanesUpdate'
import NewDojan from './components/new/NewDojan'

function App() {

  return (
    <div className=''>
        
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/paneldecontrol" element={<Paneldecontrol/>}/>
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
        <Route path='/eliminados' element={<Eliminados/>}/>

        <Route path='/newalumno' element={<Newalumno/>}/>
        <Route path='/newusuario' element={<NewUsuario/>}/>
        <Route path='/newprofesor' element={<NewProfesor/>}/>
        <Route path='/newdojan' element={<NewDojan/>}/>

        <Route path='/updatealumno/:id' element={<AlumnoUpdate/>}/>
        <Route path='/updateuser/:id' element={<UserUpdate/>}/>
        <Route path='/updateprofesor/:id' element={<ProfesorUpdate/>}/>
        <Route path='/updatedojan/:id' element={<DojanesUpdate/>}/>
        
        <Route path='/deletealumno/:id' element={<DeleteAlumno/>}/>
        <Route path='/deleteprofesor/:id' element={<DeleteProfesor/>}/>
        <Route path='/deleteuser/:id' element={<DeleteUser/>}/>
        <Route path='/deletedojan/:id' element={<DeleteDojan/>}/>

        <Route path='/pc_alumnos' element={<Alumnos_PC/>}/>
        <Route path='/pc_usuarios' element={<Usuarios_PC/>}/>
        <Route path='/pc_profesores' element={<Profesores_PC/>}/>
        <Route path='/pc_dojanes' element={<Dojanes_PC/>}/>

        <Route path='/alumno/:id' element={<AlumnoDetail/>}/>
        <Route path='/user/:id' element={<UserDetail/>}/>
        <Route path='/profesor/:id' element={<ProfesorDetail/>}/>
        <Route path='/dojan/:id' element={<DojanDetail/>}/>
      </Routes>

    </div>

  )
}

export default App
