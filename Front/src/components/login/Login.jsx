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
        <div className="bg-orange-200">
            <Nav/>
                <div className=" bg-blue-400 relative w-72 h-64 mt-12 p-4 left-custom border-2 border-black  rounded-xl">
                <form className='p-2 bg-lime-500' onSubmit={handleSubmit} >
                        <input 
                            className="bg-slate-300 border-2 border-black rounded-xl ml-6"
                            type='text'
                            key="email"
                            name= "email"
                            value={userData.email}
                            placeholder=""
                            onChange={handleChange}
                        />
                    <p className="text-red-500 ml-14">{ errors.email ? errors.email : null }</p>
                        <input
                            className="bg-slate-300 border-2 border-black rounded-xl ml-6" 
                            type='password'
                            key="password"
                            name= "password"
                            value={userData.password}
                            placeholder=""
                            onChange={handleChange}
                        />
                    <p className="text-red-500 ml-10">{ errors.password && errors.password }</p>
                    <button
                        className="mt-4 ml-6 border-2 border-cyan-800 bg-slate-300 rounded-xl p-1" 
                        type="submit"
                        disabled={ errors.email || errors.password }
                        onClick={handleSubmit}>
                        Ingresar
                    </button>
                    <button
                        className="mt-4 ml-10 border-2 border-cyan-800 bg-slate-300 rounded-xl p-1" 
                        type="button"
                        onClick={handleNewUser}>
                        Registrarse
                    </button>
                </form>
                </div>
                
            <Navbot/>
        </div>
    )
}
export default Login