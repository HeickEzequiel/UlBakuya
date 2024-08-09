import { create } from "zustand";
import axios from "axios";

const alumnosStore = create((set)=>{
    initialState = () =>{
        const storedState = localStorage.getItem("alumnoState")
        if(storedState){
            return JSON.parse(storedState)
        }
        return{
            alumno:{
                nombre:"",
                apellido:"",
                imagen:"",
                fecha_de_nacimiento:"",
                escuela:"",
                graduacion:"",
                fecha_de_examen:"",
                profesor:""
            },
            isRegistering: false,
            registerSuccess: false
        }
    }
    return{
        ...initialState(),

        register: async (alumnoData)=>{
            set({
                isRegistering: true,
                registerSuccess: false
            })
            try {
                const response = await axios.post(`http://localhost:3001/newalumno`, alumnoData)
                const newAlumno = response.data

                set({
                    isRegistering: false,
                    registerSuccess: true,
                    alumno:{
                        nombre: newAlumno.nombre,
                        apellido: newAlumno.apellido,
                        imagen: newAlumno.imagen,
                        fecha_de_nacimiento: newAlumno.fecha_de_nacimiento,
                        escuela: newAlumno.escuela,
                        graduacion: newAlumno.graduacion,
                        fecha_de_examen: newAlumno.fecha_de_examen,
                        profesor: newAlumno.profesor
                    }
                })
                localStorage.setItem(
                    "alumnoState",
                    JSON.stringify({ alumno: newAlumno, registerSuccess: true})
                )
            } catch (error) {
                set({isRegistering: false, registerSuccess: true})
            }
        }
    }
})

export default alumnosStore