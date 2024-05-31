import { useState } from 'react'
import Carousel from './components/carousel/Carousel'
import Nav from './components/nav/Nav'
import Navbot from './components/navbot/Navbot'
import Body from './components/body/Body'
import Choi from './components/choi/Choi'
function App() {
  
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

export default App
