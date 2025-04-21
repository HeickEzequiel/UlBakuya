import React from 'react'
import { AdvancedImage } from '@cloudinary/react'
import { x, facebook, instagram, tiktok } from '../../config/cloudinary'
function Footer() {
  return (
    
    <footer className='lg:inset-x-0 lg:top-full bg-black'>
        <div>
          <h2 className='lg:text-white lg:text-left lg:mr-4 lg:my-1 lg:mx-2'>Seguinos en nuestras redes</h2>
            <div className="lg:flex lg:absolute lg:gap-1">
            <a href="https://www.instagram.com/ulbakuya/" target="_blank"> <AdvancedImage cldImg={instagram} className='lg:size-8 lg:rounded-lg lg:ml-2 lg:transition lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 lg:duration-300'/></a>
            <a href="https://www.facebook.com/ulbakuya?mibextid=ZbWKwL" target="_blank">  <AdvancedImage cldImg={facebook} className='lg:size-8 lg:rounded-lg lg:ml-2 lg:transition lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 lg:duration-300'/></a>
            <a href="http://localhost:5173/#/proximamente" >  <AdvancedImage cldImg={tiktok} className='lg:size-8 lg:rounded-lg lg:ml-2 lg:transition lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 lg:duration-300'/></a>
            <a href="http://localhost:5173/#/proximamente">  <AdvancedImage cldImg={x}className='lg:size-8 lg:rounded-lg lg:ml-2 lg:transition lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 lg:duration-300'/></a>
            </div>
        </div>
        <div className=' lg:mr-4 lg:my-1' >
          <h2 className="lg:text-white lg:text-lg lg:font-normal lg:text-center">Escribinos a</h2>
          <p className="lg:text-lg lg:font-normal lg:text-white lg:my-0.1 lg:text-center">ulbakuya@gmail.com</p>
        </div>
    </footer>
  )
}
export default Footer