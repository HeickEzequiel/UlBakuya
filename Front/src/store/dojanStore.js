import { create } from "zustand";
import axios from "axios";

const dojanStore = create((set)=>{
    const initialState = ()=>{
        const storedState = localStorage.getItem("dojanState")
        if(storedState){
            return JSON.parse(storedState)
        }
        return{
            dojan:{
                club:"",
                escuela:"",
                direccion:"",
                imagen:"",
                tel:"",
                profesor:"",
                horarios:""
            },
            isRegistering: false,
            registerSuccess: false
        }
    }
    return{
        ...initialState(),

        register: async (dojanData) =>{
            set({
                isRegistering: true,
                registerSuccess: false
            })
            try{
                const response = await axios.post (`http://localhost:3001/newdojan`, dojanData)
                const newDojan = response.data

                set({
                    isRegistering: false,
                    registerSuccess: true,
                    dojan:{
                        club: newDojan.club,
                        direccion: newDojan.direccion,
                        imagen: newDojan.imagen,
                        tel: newDojan.tel,
                        profesor: newDojan.profesor,
                        horarios: newDojan.horarios
                    }
                })
                localStorage.setItem("dojanState", JSON.stringify({
                    dojan: newDojan,
                    registerSuccess: true
                }))
            }catch(error){
                set({isREgistering: false, registerSuccess: true})
            }
        }
    }
})
export default dojanStore