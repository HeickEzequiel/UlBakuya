import React from 'react'
import { choi } from '../../config/cloudinary'
import { AdvancedImage } from '@cloudinary/react'

function Choi() {
  return (
    <div className=''>
        <div className='flex border-8 border-black mx-40 my-8 outline-double outline-3 outline-offset-2 shadow-2xl'>
        <AdvancedImage cldImg={choi} className= 'relative my-6 ml-52 rounded-full shadow-md'/>
        <p className='relative font-cursiva text-4xl text-center my-12 ml-10'> Ayudar a otros a desarrollarse y triunfar en la vida,
          <br/> constituye una recompensa por si misma y tiene valor 
          <br/>solo si no se espera nada a cambio
        </p>
        </div>
    </div>
  )
}
export default Choi