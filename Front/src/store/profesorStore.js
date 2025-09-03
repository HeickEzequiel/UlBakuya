import { create } from "zustand";
import api from "../api/ubk";

const profesorStore = create((set, get)=>{
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

                const response = await api.post(`/newprofesor`, profesorData)
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
        },

        profesores: [],
        searchTerm: "",
        selectedEscuela:"todas",
        selectedGraduacion:"todas",
        selectedInstructorMayor:"todas",
        sortBy:"nombre-asc",

        setProfesores:(profesores) => set({profesores}),
        setSearchTerm:(term) => set({searchTerm: term}),
        setSelectedEscuela:(escuela) => set({selectedEscuela: escuela}),
        setSelectedGraduacion:(graduacion) => set({selectedGraduacion: graduacion}),
        setSelectedInstructorMayor:(instructor_mayor) => set({selectedInstructorMayor: instructor_mayor}),
        setSortBy: (sort) => set({sortBy: sort}),

        getFilteredProfesores: () => {
            const{
                profesores,
                searchTerm,
                selectedEscuela,
                selectedGraduacion,
                selectedInstructorMayor,
                sortBy
            } = get()

            let results = [...profesores]

            if(searchTerm){
                results = results.filter((profesor)=>
                profesor.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                profesor.apellido.toLowerCase().includes(searchTerm.toLowerCase())
                )
            }

            if(selectedEscuela !== "todas"){
                results = results.filter((profesoresArray) => profesoresArray.escuela.toLowerCase() === selectedEscuela.toLowerCase())
            }
            if(selectedGraduacion !== "todas"){
                results = results.filter((profesoresArray) => profesoresArray.graduacion.toLowerCase() === selectedGraduacion.toLowerCase())
            }
            if(selectedInstructorMayor !== "todas"){
                results = results.filter((profesoresArray) => profesoresArray.instructor_mayor.toLowerCase() === selectedInstructorMayor.toLowerCase())
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

export default profesorStore