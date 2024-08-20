import { useNavigate} from "react-router-dom"
import { useState } from "react"
import userValidation from "../../../utils/userValidation";
import Nav from "../nav/Nav";
import Navbot from "../footer/Footer";
import userStore  from "../../store/loginStore"
import Footer from "../footer/Footer";

function Newuser (props){
    const navigate = useNavigate()
    const [userData, setUserData] = useState ({
      nombre:"",
      apellido:"",
      fecha_de_nacimiento:"",
      tel:"",
      email:"",
      password: ""
    })
          
    const [errors, setErrors] = useState({
      nombre:"Ingrese su nombre",
      apellido:"Ingrese su apellido",
      fecha_de_nacimiento:"Ingrese su fecha de nacimiento",
      tel:"ingrese numero de telefono",
      email:"Ingrese su email",
      password:"Ingrese su contraseña"
    })
    
    const { register } = userStore()
    const handleChange = (event) => {
        const {name, value} = event.target
        setUserData({...userData, [name]: value})
        setErrors(userValidation({...userData, [name]: value }))
    }        
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        register(userData)
        alert("usuario creado con exito")
        navigate("/login")
      } catch (error) {
          console.error('Error al realizar la solicitud:', error);
        }
    };
  
    return(
        <div className='bg-orange-200'>
            <Nav/>
            <div className=" bg-blue-400 relative w-96 h-auto mt-12 p-4 left-custom border-2 border-black  rounded-xl">
                <form className='p-2 bg-lime-500' onSubmit={handleSubmit} >
                    <input
                        className="bg-slate-300 border-2 border-black rounded-xl ml-6" 
                        type='text'
                        key="nombre"
                        name= "nombre"
                        value={userData.nombre}
                        placeholder="Ingresar nombre"
                        onChange={handleChange}
                    />
                    <p className="text-red-500">{ errors.nombre ? errors.nombre : null }</p>
                    <br />
                    <input
                        type='text'
                        key="apellido"
                        name= "apellido"
                        value={userData.apellido}
                        placeholder="Ingresar apellido"
                        onChange={handleChange}
                    />
                    <p className="text-red-500">{ errors.apellido ? errors.apellido : null }</p>
                    <br />
                    <input
                        type='date'
                        key="fecha_de_nacimiento"
                        name= "fecha_de_nacimiento"
                        value={userData.fecha_de_nacimiento}
                        placeholder="Ingresar fecha de nacimiento"
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <input
                        type='text'
                        key="tel"
                        name= "tel"
                        value={userData.tel}
                        placeholder="Ingresar numero de telefono"
                        onChange={handleChange}
                    />
                    <p className="text-red-500">{ errors.tel ? errors.tel : null }</p>
                    <br />
                    <input
                        type='text'
                        key="email"
                        name= "email"
                        value={userData.email}
                        placeholder="Ingresar email"
                        onChange={handleChange}
                    />
                    <p className="text-red-500">{ errors.email ? errors.email : null }</p>
                    <br />
                    <input
                        type='password'
                        key="password"
                        name="password"
                        value={userData.password}
                        placeholder="Ingresar password"
                        onChange={handleChange}
                    />
                    <p className="text-red-500">{ errors.password && errors.password }</p>
                    <br />
                    <button className='' type="submit" disabled={ errors.email || errors.password }>Crear usuario! </button>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default Newuser