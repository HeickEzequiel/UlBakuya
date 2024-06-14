import React from 'react'

function Body() {
  return (
    <div className='flex mx-8 mt-8 '>
    
        <div className='place-content-center p-4 border-2 border-gray-500 mx-1 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-lime-200 duration-300'>
            <button className='ml-20 box transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Cursos</button>
            <p className='p-2 text-center'>Cursos de estandarizacion y perfeccionamiento</p>
        </div>
    
        <div className='place-content-center p-4 border-2 border-gray-500 mx-1 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-lime-200 duration-300'>
            <button className='ml-24 box transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Eventos</button>
            <p className='p-2 text-center'>Eventos especiales: el dia del niño, fin de año, entre otras</p>
        </div>
     
        <div className='place-content-center p-4 border-2 border-gray-500 mx-1 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-lime-200 duration-300'>
            <button className='ml-24 box transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Torneos</button>
            <p className='p-2 text-center'>Torneos y eventos deportivos realizados por la escuela </p>
        </div>
     
        <div className='place-content-center p-4 border-2 border-gray-500 mx-1 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-lime-200 duration-300'> 
            <button className='ml-20 box transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Examenes</button>
            <p className='p-2 text-center  '>Examenes de cinturones para seguir aprendiendo</p>
        </div>
    </div>
    )
}
export default  Body