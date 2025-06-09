import { create } from "zustand";
import axios from "axios";

const dojanStore = create((set, get)=>{
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
                set({isRegistering: false, registerSuccess: true})
            }
        },

        dojanes: [],
        searchTerm: "",
        selectedProfesor: "todas",
        selectedEscuela: "todas",
        sortBy: "nombre-asc",

        setDojanes:(dojanes) => set({dojanes}),
        setSearchTerm:(term) => set({searchTerm: term}),
        setSelectedProfesor:(profesor) => set({selectedProfesor: profesor}),
        setSelectedEscuela:(escuela) => set({selectedEscuela: escuela}),
        setSortBy: (sort) => set({sortBy: sort}),

        getFilteredDojanes: () =>{
            const{
                dojanes,
                searchTerm,
                selectedProfesor,
                selectedEscuela,
                sortBy
            } = get()

            let results = [...dojanes]

            if(searchTerm){
                results = results.filter((dojan) =>
                dojan.club.toLowerCase().includes(searchTerm.toLowerCase()) 
                )
            }

            if(selectedProfesor !== "todas"){
                results = results.filter((dojanArray)=> dojanArray.profesor === selectedProfesor)
            }

            if(selectedEscuela !== "todas"){
                results = results.filter((escuelaArray)=> escuelaArray.escuela === selectedEscuela)
            }

            if(sortBy === "nombre-asc"){
                results.sort((a,b)=>a.club.localeCompare(b.club))
            } else if (sortBy === "nombre-desc"){
                results.sort((a,b)=>b.club.localeCompare(a.club))
            }

            return results
        }
    }
})
export default dojanStore