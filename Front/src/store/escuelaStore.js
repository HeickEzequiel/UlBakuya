import { create } from "zustand";
import axios from "axios";

const escuelasStore = create((set)=>{
    const initialState = () =>{
        const storedState = localStorage.getItem("escuelaState")
        if(storedState){
            return JSON.parse(storedState)
        }
        return{
            escuela:{
                nombre:"",
                director:"",
                dojan:"",
                imagen:""
            },
            isRegistering: false,
            registerSuccess: false
        }
    }
    return{
        ...initialState(),

        register:async (escuelaData)=>{
            set({
                isRegistering: true,
                registerSuccess: false
            })
            try{
                const response = await axios.post(`http://localhost:3001/newescuela`, escuelaData)
                const newEscuela = response.data

                set({
                    isRegistering: false,
                    registerSuccess: true,
                    escuela:{
                        nombre: newEscuela.nombre,
                        director: newEscuela.director,
                        dojan: newEscuela.dojan,
                        imagen:newEscuela.imagen
                    }
                })
                localStorage.setItem(
                    "escuelaState",
                    JSON.stringify({ escuela: newEscuela, registerSuccess: true})
                )
            }catch(error){
                set({isRegistering: false, registerSuccess: true})
            }
        }
    }
})
export default escuelasStore