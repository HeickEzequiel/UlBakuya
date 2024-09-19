import { ubk,pilsung,gyeomson,ubuntu } from '../../config/cloudinary'
import { AdvancedImage } from '@cloudinary/react'

function Escuelas() {
  return (
    <div className='relative mt-4'>
      <p className='text-center text-6xl font-cursiva font-bold underline underline-offset-8 text-black mt-12'>Escuelas asociadas</p>
      <div className='flex size-48 mx-80 mt-8'>
        <AdvancedImage cldImg={ubk} className= 'mx-4 hover:-translate-y-1 hover:scale-110 duration-300'/>
        <AdvancedImage cldImg={pilsung} className= 'mx-4 hover:-translate-y-1 hover:scale-110 duration-300'/>
        <AdvancedImage cldImg={gyeomson} className= 'mx-4 hover:-translate-y-1 hover:scale-110 duration-300'/>
        <AdvancedImage cldImg={ubuntu} className= 'mx-4 hover:-translate-y-1 hover:scale-110 duration-300'/>
      </div>
    </div>
  )
}
export default Escuelas