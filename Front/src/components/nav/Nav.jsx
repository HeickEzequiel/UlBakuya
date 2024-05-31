import React from 'react'
import logo2 from '../../assets/images/logo2.svg'

function Nav() {
  return (
    <div className='flex items-center  bg-slate-500 p-6'>
        <img src={logo2} className='size-20'></img>
        <span className='text-white font-bold text-center justify-center text-2xl mb-2 tracking-tight mx-2 mr-4'>Escuela de Taekwondo UlBakuya</span>
        <div className='ml-20'>
        <button className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>Home</button>
        <button className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>La Escuela</button>
        <button className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>Profesores</button>
        <button className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>Lugares de entrenamiento</button>
        <button className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ml-96'>Ingresar 🥋</button>
        </div>
    </div>
  )
}
export default Nav