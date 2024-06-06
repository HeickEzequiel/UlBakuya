import React from 'react'
import logo2 from '../../assets/images/logo2.svg'
import { Link } from 'react-router-dom'
function Nav() {
  
  return (
    <div className=' static flex items-center bg-slate-500 p-4 w-full'>
        <img src={logo2} className='size-20 mb-5 ml-6'></img>
        <span className='absolute mt-20 text-white'>sesang eul bakku ja</span>
        <span className='text-white font-bold text-center justify-center text-2xl mb-5 tracking-tight ml-8 mx-2 mr-4'>Escuela de Taekwondo Ul Bakuya</span>
        <div className='ml-20 mb-4'>
          <button className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to='/'>Home</Link></button>
          <button className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to='/escuela'>La Escuela</Link></button>
          <button className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to='/profesores'>Profesores</Link></button>
          <button className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to='/dojan'>Lugares de entrenamiento</Link></button>
          <button className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ml-96 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to= '/login'>Ingresar </Link></button>
        </div>
    </div>
  )
}
export default Nav