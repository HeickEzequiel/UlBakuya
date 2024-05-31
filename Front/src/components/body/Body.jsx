import React from 'react'

function Body() {
  return (
    <div className='flex mx-8 mt-8 p-2'>
    
        <div className='place-content-center'>
            <p className='ml-28 box'>Cursos</p>
            <p className='p-2'>Cursos y seminarios de estandarizacion y perfeccionamiento del Taekwondo</p>
        </div>
    
        <div className='place-content-center'>
            <p className='ml-32 box'>Eventos</p>
            <p className='p-2'>Eventos especiales en fechas espaciales como el dia del niño, fin de año, entre otras</p>
        </div>
     
        <div className='place-content-center'>
            <p className='ml-12 box'>Torneos</p>
            <p className='p-2'>Torneos y eventos deportivos realizados por la escuela </p>
        </div>
     
        <div className='place-content-center'> 
            <p className='ml-4 box'>Examenes</p>
            <p className='p-2'>Examenes menusales de gups y danes</p>
        </div>
    </div>
    )
}
export default  Body