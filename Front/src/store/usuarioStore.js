import { create } from "zustand";
import axios from "axios";

const usuarioStore = create((set)=>{
    const initialState = () =>{
        const storedState = localStorage.getItem("usuarioState")
        if(storedState){
            return JSON.parse(storedState)
        }
        return{
            usuario:{
                nombre:"",
                apellido:"",
                fecha_de_nacimiento:"",
                tel:"",
                email:"",
                password:"",
                nivel:"",
                imagen:"",
                escuela:"",
                profesor:"",
                graduacion:"",
                fecha_de_examen:""
            },
            isRegistering: false,
            registerSuccess: false
        }
    }
    return{
        ...initialState(),

        register: async (usuarioData)=>{
            set({
                isRegistering: true,
                registerSuccess: false
            })
            try {

                const response = await axios.post(`http://localhost:3001/newuser`, usuarioData)
                const newUsuario = response.data

                set({
                    isRegistering: false,
                    registerSuccess: true,
                    usuario:{
                        nombre: newUsuario.nombre,
                        apellido: newUsuario.apellido,
                        fecha_de_nacimiento: newUsuario.fecha_de_nacimiento,
                        tel:newUsuario.tel,
                        email:newUsuario.email,
                        password:newUsuario.password,
                        nivel:newUsuario.nivel,
                        imagen: newUsuario.imagen,
                        escuela: newUsuario.escuela,
                        profesor: newUsuario.profesor,
                        graduacion: newUsuario.graduacion,
                        fecha_de_examen: newUsuario.fecha_de_examen
                    }
                })
                localStorage.setItem(
                    "usuarioState",
                    JSON.stringify({ usuario: newUsuario, registerSuccess: true})
                )
            } catch (error) {
                set({isRegistering: false, registerSuccess: true})
            }
        }
    }
})

export default usuarioStore