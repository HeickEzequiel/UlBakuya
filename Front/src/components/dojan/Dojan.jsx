import React from 'react'
import Nav from '../nav/Nav'
import Navbot from '../footer/Footer'
import CardDojan from '../cards/CardDojan'
import { useFetchDojan } from '../../hooks/useDojan'
import Footer from '../footer/Footer'

function Dojan() {
  const {data, isLoading, error } = useFetchDojan()

  if(isLoading){
    return <div>Loading...</div>
  }
  if(error){
    return <div>Error: {error.message}</div>
  }
  console.log(data)
  return (
    <div>
        <Nav/>
          <div>
            {!data.length
            ? <h1>no existen lugares de entrenamiento</h1>
            : data.map((dojan, key)=>(
              <CardDojan
                key={key}
                club={dojan.club}
                direccion={dojan.direccion}
                imagen={dojan.imagen}
                tel={dojan.tel}
                profesor={dojan.profesor}
                horarios={dojan.horarios}
              />
            ))
            }
          </div>
        <Footer/>
    </div>
  )
}
export default Dojan
