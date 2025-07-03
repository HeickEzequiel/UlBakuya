import Nav from '../nav/Nav'
import Carousel from '../carousel/Carousel'
import Body from '../body/Body'
import userStore  from '../../store/loginStore.js'
import UserNav from '../usernav/UserNav.jsx'
import Footer from '../footer/Footer.jsx'

function Home() {
  const { isLogged } = userStore()


  return (
    <div className=''>
        <Nav/>
        {isLogged ? <UserNav/> : <div className='relative flex items-center p-4 w-full '></div>}
        <Carousel/>
        <div className="max-w-4xl mx-auto mt-16 px-6">
          <div className="bg-gradient-to-r from-white via-gray-50 to-gray-100 shadow-xl rounded-2xl p-6 md:p-10 border border-gray-200">
            <h2 className="text-xl md:text-3xl font-semibold text-center text-gray-800 leading-relaxed italic">
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
