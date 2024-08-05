import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner"
import userStore  from "../../store/loginStore"
import api from "../../api/ubk"
import validation from "../../../utils/validation";
import Nav from "../nav/Nav";
import Navbot from "../navbot/Navbot";


function Login(props){
    const navigate = useNavigate();
    const { login } = userStore()
    const [userData, setUserData] = useState({
        email:"",
        password:""
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
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = userData;
        try {
            const response = await api.post("/login",{
                email,
                password
            })
            login(response.data)
            localStorage.setItem("userData", JSON.stringify(response.data))
            console.log("localStorage----->", localStorage.userData)
            navigate("/")
            toast.success("successful login")
            
        } catch (error) { 
            toast.error("incorrect password")
        }
    }

    const handleNewUser = () =>{
        navigate("/newuser");
    }

    return(
        
        <div className="absolute w-full h-full ">
            <Nav/>
                <div className="relative bg-blue-600 h-96 w-96 left-custom top-12 border-2 border-black rounded-xl">
                    <p className="text-center mx-10 font-bold text-2xl font-serif">Inicia Sesión</p>
                <form className='' onSubmit={handleSubmit} >
                        <div className="relative  ">
                        <input 
                            className="absolute bg-slate-300 border-2 border-black rounded-md left-18 top-5 w-60 p-1"
                            type='text'
                            key="email"
                            name= "email"
                            value={userData.email}
                            placeholder="Email"
                            onChange={handleChange}
                        />
                    {/* <p className="text-red-500 ml-16">{ errors.email ? errors.email : null }</p> */}
                        <input
                            className="absolute bg-slate-300 border-2 border-black rounded-md left-18 top-20 w-60 p-1" 
                            type='password'
                            key="password"
                            name= "password"
                            value={userData.password}
                            placeholder="Contraseña"
                            onChange={handleChange}
                        />
                    {/* <p className="text-red-500 ml-10">{ errors.password && errors.password }</p> */}
                    <button
                        className="absolute top-36 left-18 w-60 border-2 border-cyan-800 bg-slate-300 rounded-xl p-1 " 
                        type="submit"
                        disabled={ errors.email || errors.password }
                        onClick={handleSubmit}>
                        Ingresar
                    </button>
                    <p className="absolute top-48 left-48 -ml-2 text-center mx-10 font-bold text-2xl font-serif">Ó</p>
                    <button
                        className="absolute top-56 left-18 w-60 border-2 border-cyan-800 bg-slate-300 rounded-xl p-1" 
                        type="button"
                        onClick={handleNewUser}>
                        Registrarse
                    </button>
                    </div>
                </form>
                </div>
                
            <Navbot/>
        </div>
    )
}
export default Login