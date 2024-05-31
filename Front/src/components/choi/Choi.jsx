import React from 'react'
import { choi } from '../../config/cloudinary'
import { AdvancedImage } from '@cloudinary/react'

function Choi() {
  return (
    <div>
        <div>
        <AdvancedImage cldImg={choi} />
        <p className='font-cursiva'> Ayudar a otros a desarrollarse y triunfar en la vida, constituye una recompensa por si misma y tiene valor solo si no se espera nada a cambio</p>
        </div>
    </div>
  )
}
export default Choi