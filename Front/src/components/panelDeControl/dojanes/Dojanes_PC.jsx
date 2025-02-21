import React from 'react'
import { useFetchDojan } from '../../../hooks/useDojan'
import userStore from '../../../store/loginStore'
import Nav from '../../nav/Nav'
import UserNav from '../../usernav/UserNav'
import CardDojanes from '../../cards/dojan/CardDojanes'
import Footer from '../../footer/Footer'
import { Link } from 'react-router-dom'

function Dojanes_PC() {
  const { data: dojanes, isLoading, error } = useFetchDojan()
  const { isLogged, user } = userStore()
console.log(dojanes)
  if(isLoading){
    return (
      <div>
        <Nav/>
        <div>Loading...</div>
        <Footer/>
      </div>
    )
  }
  if(error){
    error.response.status===404 ? 
      <div> 
        <Nav/> 
        <Link to='/newdojan'><button className="boton lg:relative lg:top-20 lg:left-24">Agregar Dojan</button></Link>
        <p className="absolute top-20">No existen Dojanes cargados por favor ingresar el primero</p>
        <Footer/>
      </div>:
      <div>
        <Nav/>
        <div>Error: {error.message}</div>
        <Footer/>
      </div>
  }

  return (
    <div>
      <Nav/>
      {isLogged && user.nivel==="Director"|| user.nivel==="Profesor"?
        <div>
          <UserNav/>
          <div>
            <Link to='/newdojan'><button className="boton lg:relative lg:top-20 lg:left-24">Agregar Dojan</button></Link>
            <div>{user.nivel==="Director" ? <Link to='/dojanes_eliminados'><button className="boton lg:relative lg:top-20 lg:left-24"> Ver Eliminados</button></Link>:null}</div> 

            {dojanes ? 
              dojanes.map((dojan, key)=>(dojan.eliminado===false?
                <CardDojanes
                  key={key}
                  id={dojan.id}
                  imagen={dojan.imagen}
                  club={dojan.club}
                  direccion={dojan.direccion}
                  horarios={dojan.horarios}
                  profesores={dojan.profesores}
                  estado={dojan.estado}
                  eliminado={dojan.eliminado}
                />:null
              )):null
            }  
          </div>
        </div>: <p>Debes iniciar sesion como administrador para acceder al panel de control</p>}
      <Footer/>
    </div>
  )
}

export default Dojanes_PC