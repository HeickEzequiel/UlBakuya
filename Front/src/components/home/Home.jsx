import React from 'react'
import Nav from '../nav/Nav'
import Choi from '../choi/Choi'
import Carousel from '../carousel/Carousel'
import Body from '../body/Body'
import Navbot from '../footer/Footer.jsx'
import userStore  from '../../store/loginStore.js'
import UserNav from '../usernav/UserNav.jsx'
import Footer from '../footer/Footer.jsx'

function Home() {
  const { isLogged } = userStore()


  return (
    <div>
        <Nav/>
        {isLogged ? <UserNav/> : <div className='relative flex items-center p-4 w-full '></div>}
        <Choi/>
        <Carousel/>
        <Body/>
        <Footer/>
    </div>
  )
}
export default Home
