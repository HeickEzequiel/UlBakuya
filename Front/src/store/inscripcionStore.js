import { create } from "zustand"
import axios from "axios"

const inscripcionStore = create((set)=>{
    const initialState = () =>{
        const storedState = localStorage.getItem("inscripcionStore")
        if(storedState){
            return JSON.parse(storedState)
        }
        return{
            inscripcion:{
                tipo_de_evento:"",
                horarios:"",
                nombre:"",
                apellido:"",
                edad:"",
                altura:"",
                peso:"",
                graduacion_actual:"",
                proxima_graduacion:"",
                imagen:""
            },
            isRegistering: false,
            registerSuccess: false
        }
    }
    return{
        ...initialState(),

        register: async (inscripcionData) =>{
            set({
                isRegistering: true,
                registerSuccess: false
            })
            try {
                const response = await axios.post(`http://localhost:3001/newinscripcion`, inscripcionData)
                const newInscripcion = response.data

                set({
                    isRegistering: false,
                    registerSuccess: true,
                    inscripcion:{
                        tipo_de_evento: newInscripcion.tipo_de_evento,
                        horarios: newInscripcion.horarios,
                        nombre: newInscripcion.nombre,
                        apellido: newInscripcion.apellido,
                        edad: newInscripcion.edad,
                        altura: newInscripcion.altura,
                        peso: newInscripcion.peso,
                        graduacion_actual: newInscripcion.graduacion_actual,
                        proxima_graduacion: newInscripcion.proxima_graduacion,
                        imagen: newInscripcion.imagen
                    }
                })
                localStorage.setItem("inscripcionState", JSON.stringify({
                    inscripcion: newInscripcion,
                    registerSuccess: true
                }))
            } catch (error) {
                set({isRegistering: false, registerSuccess: true})
            }
        }
    }
})
export default inscripcionStore