import Nav from '../../components/nav/Nav'
import CardDojan from '../../components/cards/dojan/CardDojan'
import { useFetchDojanes } from '../../hooks/useDojan'
import Footer from '../../components/footer/Footer'
import UserNav from '../usernav/UserNav'
import userStore from '../../store/loginStore'


function Dojan() {
  const {data, isLoading, error } = useFetchDojanes()
  const { isLogged, user } = userStore()

  if(isLoading){
    return( 
      <div>
        <Nav/>
        <p>Cargando...</p>
        <Footer/>  
      </div>
    )
    }
  if(error){
    return <div>Error: {error.message}</div>
  }
  console.log("dojan.jsx--->",data)
  return (
    <div>
        <Nav/>
        {isLogged ? <UserNav/> : <div className='relative flex items-center p-4 w-full '></div>}
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
