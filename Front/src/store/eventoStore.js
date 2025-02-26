import { create } from "zustand";
import axios from "axios";

const eventoStore = create((set)=>{
    const initialState = () =>{
        const storedState = localStorage.getItem("eventoState")
        if(storedState){
            return JSON.parse(storedState)
        }
        return{
            evento:{
                tipo_de_evento:"",
                horarios:"",
                club:"",
                direccion:"",
                imagen:""
            },
            isRegistering: false,
            registerSuccess: false
        }
    }
    return{
        ...initialState(),

        register: async (eventoData) =>{
            set({
                isRegistering: true,
                registerSuccess: false
            })
            try {
                const response = await axios.post(`http://localhost:3001/newevento`, eventoData)
                const newEvento = response.data

                set({
                    isRegistering: false,
                    registerSuccess: true,
                    evento:{
                        tipo_de_evento: newEvento.tipo_de_evento,
                        horarios: newEvento.horarios,
                        club: newEvento.club,
                        direccion: newEvento.direccion,
                        imagen: newEvento.imagen
                    }
                })
                localStorage.setItem("eventoState", JSON.stringify({
                    evento: newEvento,
                    registerSuccess: true
                }))
            } catch (error) {
                set({isRegistering: false, registerSuccess: true})                
            }
        }
    }
})
export default eventoStore