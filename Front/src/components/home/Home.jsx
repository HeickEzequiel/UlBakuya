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
    <div className='bg-[url(https://res.cloudinary.com/damoqjwmk/image/upload/v1744644035/ulbakuya/cintas.png)] bg-contain '>
        <Nav/>
        {isLogged ? <UserNav/> : <div className='relative flex items-center p-4 w-full '></div>}
        <Carousel/>
        <Body/>
        <Footer/>
    </div>
  )
}
export default Home
