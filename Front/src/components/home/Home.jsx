import React from 'react'
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
        <div className="max-w-5xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Unidos por la pasión del Taekwondo
          </h2>
        </div>
        <Carousel/>
        <Body/>
        <Footer/>
    </div>
  )
}
export default Home
