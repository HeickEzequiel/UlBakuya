import React from 'react'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
import userStore from '../../store/loginStore'
import UserNav from '../usernav/UserNav'

function ClasesEspeciales() {
    const { isLogged, user } = userStore()
    return (
        <div>
            <Nav/>
            {isLogged ? <UserNav/> : <div className='relative flex items-center p-4 w-full '></div>}
                <h1>PROXIMAMENTE</h1>
            <Footer />
        </div>
      )
}

export default ClasesEspeciales