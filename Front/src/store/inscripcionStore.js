import { create } from "zustand"
import axios from "axios"

const inscripcionStore = create((set, get)=>{
    const initialState = () =>{
        const storedState = localStorage.getItem("inscripcionStore")
        if(storedState){
            return JSON.parse(storedState)
        }
        return{
            inscripcion:{
                tipo_de_evento:"",
                fecha_del_evento:"",
                horarios:"",
                nombre:"",
                apellido:"",
                edad:"",
                altura:"",
                peso:"",
                escuela:"",
                profesor:"",
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
                        fecha_del_evento: newInscripcion.fecha_del_evento,
                        horarios: newInscripcion.horarios,
                        nombre: newInscripcion.nombre,
                        apellido: newInscripcion.apellido,
                        edad: newInscripcion.edad,
                        altura: newInscripcion.altura,
                        peso: newInscripcion.peso,
                        escuela: newInscripcion.escuela,
                        profesor: newInscripcion.profesor,
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
        },

        inscripciones: [],
        searchTerm:"",
        selectedEvento:"todas",
        selectedFechaEvento:"todas",
        selectedEscuela:"todas",
        selectedProfesor:"todas",
        selectedGraduacion:"todas",
        sortBy:"nombre-asc",

        setInscripciones:(inscripciones) => set({inscripciones}),
        setSearchTerm:(term) => set({searchTerm: term}),
        setSelectedEvento:(evento)=> set({selectedEvento: evento}),
        setSelectedFechaEvento:(fecha_del_evento)=>set({selectedFechaEvento: fecha_del_evento}),
        setSelectedEscuela:(escuela)=>set({selectedEscuela: escuela}),
        setSelectedProfesor:(profesor)=>set({selectedProfesor: profesor}),
        setSelectedGraduacion:(graduacion)=>set({selectedGraduacion: graduacion}),
        setSortBy:(sort) => set({sortBy: sort}),

        getFilteredInscripciones: ()=>{
            const{
                inscripciones,
                searchTerm,
                selectedEvento,
                selectedFechaEvento,
                selectedEscuela,
                selectedProfesor,
                selectedGraduacion,
                sortBy
            } = get()

            let results = [...inscripciones]

            if(searchTerm){
                results = results.filter((inscripcion)=>
                inscripcion.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                inscripcion.apellido.toLowerCase().includes(searchTerm.toLowerCase())
                )
            }

            if(selectedEvento !== "todas"){
                results = results.filter((inscripcionesArray) => inscripcionesArray.tipo_de_evento === selectedEvento)
            }
            if(selectedFechaEvento !== "todas"){
                results = results.filter((inscripcionesArray) => inscripcionesArray.fecha_del_evento === selectedFechaEvento)
                console.log(results)
            }
            if(selectedEscuela !== "todas"){
                results = results.filter((inscripcionesArray) => inscripcionesArray.escuela.toLowerCase() === selectedEscuela.toLowerCase())
            }
            if(selectedProfesor !== "todas"){
                results = results.filter((inscripcionesArray) => inscripcionesArray.profesor.toLowerCase() === selectedProfesor.toLowerCase())
            }
            if(selectedGraduacion !== "todas"){
                results = results.filter((inscripcionesArray) => inscripcionesArray.graduacion_actual.toLowerCase() === selectedGraduacion.toLowerCase())
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
export default inscripcionStore