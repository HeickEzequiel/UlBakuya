import { create } from "zustand";
import api from "../api/ubk";

const alumnosStore = create((set, get)=>{
    const initialState = () =>{
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

                const response = await api.post(`/newalumno`, alumnoData)
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
        },

        alumnos: [],
        searchTerm:"",
        selectedEscuela:"todas",
        selectedGraduacion:"todas",
        selectedProfesor:"todas",
        sortBy:"nombre-asc",

        setAlumnos:(alumnos) => set({alumnos}),
        setSearchTerm:(term) => set({searchTerm: term}),
        setSelectedEscuela:(escuela) => set({selectedEscuela: escuela}),
        setSelectedGraduacion:(graduacion) => set({selectedGraduacion: graduacion}),
        setSelectedProfesor:(profesor) => set({selectedProfesor: profesor}),
        setSortBy: (sort) => set({sortBy: sort}),

        getFilteredAlumnos: () =>{
            const{
                alumnos,
                searchTerm,
                selectedEscuela,
                selectedGraduacion,
                selectedProfesor,
                sortBy
            } = get()

            if (!Array.isArray(alumnos)) return [];
            
            let results = [...alumnos]
            
            if(searchTerm){
                results = results.filter((alumno)=>
                    alumno.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                alumno.apellido.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }
        
            if (selectedEscuela !== "todas") {
                results = results.filter((alumno) =>
                alumno.escuelas.some((esc) => esc.id === selectedEscuela))
            }

            if(selectedGraduacion !== "todas"){
                results = results.filter((alumnosArray) => alumnosArray.graduacion.toLowerCase() === selectedGraduacion.toLowerCase())
                
            }
            if(selectedProfesor !== "todas"){
                results = results.filter((alumno) => 
                    alumno.profesores.some((prof) => prof.id === selectedProfesor && prof.eliminado !== true))
            }

            
            if(sortBy === "nombre-asc"){
                results.sort((a,b)=>a.nombre.localeCompare(b.nombre))
            } else if (sortBy === "nombre-desc"){
                results.sort((a,b)=>b.nombre.localeCompare(a.nombre))
            }

            return results
        }
    }
})

export default alumnosStore
