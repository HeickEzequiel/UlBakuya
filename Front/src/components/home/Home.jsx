import Nav from '../nav/Nav'
import Carousel from '../carousel/Carousel'
import Body from '../body/Body'
import userStore  from '../../store/loginStore.js'
import UserNav from '../usernav/UserNav.jsx'
import Footer from '../footer/Footer.jsx'

function Home() {
  const { isLogged} = userStore()

  return (
    <div className='bg-white'>
        <Nav/>
        {isLogged ? <UserNav/> : <div className='relative flex items-center p-4 w-full '></div>}
        <div className='text-4xl ml-8 mt-8 font-bold font-sans text-gray-900'>Bienvenidos a FIT </div>
        <div className='text-2xl ml-12 font-bold text-lime-600 font-sans'>Formación Integral de Taekwondo</div>

        <Carousel/>
        <div className="max-w-4xl mx-auto my-8 px-6">
          <div className="bg-transparent shadow-xl rounded-2xl p-6 md:p-10 border border-gray-200">
            <h2 className="text-xl md:text-3xl font-semibold text-center text-lime-600 leading-relaxed italic">
              “El taekwondo no solo forja el cuerpo, sino también el carácter. Cada caída es una oportunidad para levantarse con más fuerza.”
            </h2>
         </div>
        </div>
        <Body/>
        <Footer/>
    </div>
  )
}
export default Home
