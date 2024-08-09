import axios from 'axios'
import { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
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
      </Routes>

    </div>

  )
}

export default App
