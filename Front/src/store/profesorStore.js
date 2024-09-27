import { create } from "zustand";
import axios from "axios";

const profesorStore = create((set)=>{
    const initialState = () =>{
        const storedState = localStorage.getItem("profesorState")
        if(storedState){
            return JSON.parse(storedState)
        }
        return{
            profesor:{
                nombre:"",
                apellido:"",
                imagen:"",
                fecha_de_nacimiento:"",
                escuela:"",
                graduacion:"",
                fecha_de_examen:"",
                instructor_mayor:"",
                estado:"",
                eliminado:""
            },
            isRegistering: false,
            registerSuccess: false
        }
    }
    return{
        ...initialState(),

        register: async (profesorData)=>{
            set({
                isRegistering: true,
                registerSuccess: false
            })
            try {

                const response = await axios.post(`http://localhost:3001/newprofesor`, profesorData)
                const newProfesor = response.data

                set({
                    isRegistering: false,
                    registerSuccess: true,
                    alumno:{
                        nombre: newProfesor.nombre,
                        apellido: newProfesor.apellido,
                        imagen: newProfesor.imagen,
                        fecha_de_nacimiento: newProfesor.fecha_de_nacimiento,
                        escuela: newProfesor.escuela,
                        graduacion: newProfesor.graduacion,
                        fecha_de_examen: newProfesor.fecha_de_examen,
                        instructor_mayor: newProfesor.instructor_mayor,
                        estado: newProfesor.estado,
                        eliminado: newProfesor.eliminado
                    }
                })
                localStorage.setItem(
                    "profesorState",
                    JSON.stringify({ profesor: newProfesor, registerSuccess: true})
                )
            } catch (error) {
                set({isRegistering: false, registerSuccess: true})
            }
        }
    }
})

export default profesorStore