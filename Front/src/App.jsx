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
function App() {

  return (
    <div>
        
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/escuela" element={<Escuela/>}/>
        <Route path="/profesores" element={<Profesores/>}/>
        <Route path="/dojan" element={<Dojan/>}/>
        <Route path='/Proximamente' element={<Proximamente/>}/>
        <Route path='/newuser' element={<Newuser/>}/>
        <Route path='/perfil' element={<Perfil/>}/>
      </Routes>

    </div>

  )
}

export default App
