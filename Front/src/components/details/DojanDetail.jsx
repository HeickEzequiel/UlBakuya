import userStore from '../../store/loginStore'
import { Link, useParams } from 'react-router-dom'
import { useFetchDojan } from '../../hooks/useDojan'
import Nav from '../nav/Nav'
import UserNav from '../usernav/UserNav'
import CardDojan from '../cards/dojan/CardDojan'
import Footer from '../footer/Footer'

function DojanDetail() {
  const isLogged = userStore((state) => state.isLogged)
  const {id} = useParams()
  const { data:dojan, isLoading, error } = useFetchDojan(id)

  if(isLoading){
      return <div>Loading...</div>
  }
  if(error){
      return <div>Error: {error.message}</div>
  }
  if(!isLogged){
      return <p>Debes iniciar sesion como administrador</p>
  }

  return (
      <div>
          <Nav/>
          <UserNav/>
          <div>
              {!dojan ? <h1>No existen datos</h1>:
              <div>
                  <CardDojan
                  club={dojan.club}
                  escuela={dojan.escuela}
                  direccion={dojan.direccion}
                  imagen={dojan.imagen}
                  tel={dojan.tel}
                  profesor={dojan.profesor}
                  estado={dojan.estado}
                  />
              </div>}
              <Link to='/pc_dojanes'><button className="boton">🡸 Volver</button></Link>
          </div>
          <Footer/>
          
      </div>
  )
}

export default DojanDetail