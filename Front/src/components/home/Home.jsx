import React from 'react'
import Nav from '../nav/Nav'
import Choi from '../choi/Choi'
import Carousel from '../carousel/Carousel'
import Body from '../body/Body'
import Navbot from '../navbot/Navbot'
import userStore  from '../../store/loginStore.js'
import User from '../user/User.jsx'

function Home() {
  const { isLogged, user, login, userData} = userStore()
  //console.log("islogged-->",isLogged,"user-->", user,"login-->", login, "userData-->", userData)
  return (
    <div>
        <Nav/>
        {isLogged ? <User/> : <div className='relative flex items-center bg-blue-400 p-4 w-full '></div>}
        <Choi/>
        <Carousel/>
        <Body/>
        <Navbot/>
    </div>
  )
}
export default Home
