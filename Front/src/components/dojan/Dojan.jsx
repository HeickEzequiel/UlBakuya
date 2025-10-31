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
  return (
    <div>
        <Nav/>
        {isLogged ? <UserNav/> : <div className='relative flex items-center p-4 w-full'></div>}
          
            <div className="text-center mt-8 mb-6">
              <h1 className="text-3xl font-bold text-gray-800">
                Centros de entrenamiento
              </h1>
            </div>

          <div className='lg:grid lg:grid-cols-2 lg:gap-6 lg:p-4'>
            {!data.length
            ? <h1>no existen lugares de entrenamiento</h1>
            : data.map((dojan, key)=>(
              <CardDojan
                key={key}
                club={dojan.club}
                direccion={dojan.direccion}
                escuela={dojan.escuela}
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
