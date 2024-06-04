import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validation from "../../../utils/validation";
import Nav from "../nav/Nav";
import Navbot from "../navbot/Navbot";

function Login(props){
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email:"",
        password:","
    })
    const [errors, setErrors] = useState({
        email:"Ingrese su email",
        password:"Ingrese su contraseña"
    })
    const handleChange = (event) =>{
        const {name, value} =event.target
        setUserData({
            ...userData,
            [name]: value
        })
        setErrors(validation({
            ...userData,
            [name]: value
        }))
    }
    const handleSubmit = event => {
        event.preventDefault();
        props.login(userData);
    }

    return(
    
        <div>
            <Nav/>
            <p> por favor ingresa tu usuario y contraseña para acceder o crea un nuevo usuario</p>
            <form onSubmit={handleSubmit} >
                <label >Email: </label>
                    <input 
                        type='text'
                        key="email"
                        name= "email"
                        value={userData.email}
                        placeholder="Ingresar email"
                        onChange={handleChange}
                    />
                <p >{ errors.email ? errors.email : null }</p>
            <br />
                <label >Password: </label>
                    <input 
                        type='password'
                        key="password"
                        name= "password"
                        value={userData.password}
                        placeholder="Ingresar password"
                        onChange={handleChange}
                    />
                <p>{ errors.password && errors.password }</p>
            <br />
                <button 
                    type="submit"
                    disabled={ errors.email || errors.password }>
                        Ingresar
                </button>

            </form>
            <Navbot/>
        </div>
    )
}
export default Login