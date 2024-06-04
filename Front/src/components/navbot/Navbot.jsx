import React from 'react'
import { AdvancedImage } from '@cloudinary/react'
import { x, facebook, instagram, tiktok } from '../../config/cloudinary'
function Navbot() {
  return (
    <div className=' bg-slate-500 mt-8'>
        <div>
          <h2 className='text-white text-left mr-4 my-1 mx-2'>Seguinos en nuestras redes</h2>
            <div className="flex absolute gap-1">
              <AdvancedImage cldImg={instagram} className='size-8 rounded-lg ml-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' />
              <AdvancedImage cldImg={facebook} className='size-8 rounded-lg ml-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'/>
              <AdvancedImage cldImg={tiktok} className='size-8 rounded-lg ml-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'/>
              <AdvancedImage cldImg={x} className='size-8 rounded-lg ml-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'/>
            </div>
        </div>
        <div className=' mr-4 my-1' >
          <h2 className="text-white text-lg font-normal text-center">Escribinos a</h2>
          <p className="text-lg font-normal text-white my-0.1 text-center">ulbakuya@gmail.com</p>
        </div>
    </div>
  )
}
export default Navbot