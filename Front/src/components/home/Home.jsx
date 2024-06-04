import React from 'react'
import Nav from '../nav/Nav'
import Choi from '../choi/Choi'
import Carousel from '../carousel/Carousel'
import Body from '../body/Body'
import Navbot from '../navbot/Navbot'
function Home() {
  return (
    <div>
        <Nav/>
        <Choi/>
        <Carousel/>
        <Body/>
        <Navbot/>
    </div>
  )
}
export default Home
