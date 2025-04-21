import userStore  from '../../store/loginStore.js'
import { Link } from 'react-router-dom'

function Nav() {
  const {isLogged, logout}=userStore()
  return (
    <div className=' flex items-center bg-black p-6 w-full'>
      
        <span className='absolute top-14 left-48 ml-4 text-bold text-2xl text-white'>FIT</span>
        <span className='text-white font-bold text-center justify-center text-2xl mb-5 tracking-tight ml-8 mx-2 mr-4'>Formación Integral de Taekwondo</span>
        <div className='ml-32 mb-4'>
          <button className='block mt-4 lg:inline-block lg:mt-0 text-white font-medium hover:text-lime-400 mr-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to='/'>Home</Link></button>
          <button className='block mt-4 lg:inline-block lg:mt-0 text-white font-medium hover:text-lime-400 mr-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to='/asociacion'>La Asociaciòn</Link></button>
          <button className='block mt-4 lg:inline-block lg:mt-0 text-white font-medium hover:text-lime-400 mr-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to='/profesores'>Profesores</Link></button>
          <button className='block mt-4 lg:inline-block lg:mt-0 text-white font-medium hover:text-lime-400 mr-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to='/dojan'>Lugares de entrenamiento</Link></button>
          
          {!isLogged?
            <div className='absolute right-12 top-8'>
              <button className='block mt-4 lg:inline-block lg:mt-0 text-white font-medium hover:text-lime-400 ml-96 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to= '/login'>Ingresar </Link></button>
            </div>
          :<div>
          
          <button className=' absolute block mt-4 lg:inline-block lg:mt-0 text-white font-medium hover:text-lime-400 right-10 top-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' > <Link to='/perfil'> Perfil </Link> </button>
          <button onClick ={logout} className=' absolute block mt-4 lg:inline-block lg:mt-0 text-white font-medium hover:text-lime-400 right-24 top-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to= '/'>Desconectarse </Link></button>
          </div>
          }

        </div>
    </div>
  )
}
export default Nav