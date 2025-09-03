import { create } from "zustand";
import api from "../api/ubk";

const escuelasStore = create((set, get)=>{
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
                const response = await api.post(`/newescuela`, escuelaData)
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
        },

        escuelas: [],
        searchTerm:"",
        selectedDojan:"todas",
        sortBy:"nombra-asc",

        setEscuelas: (escuelas) => set({escuelas}),
        setSearchTerm: (term) => set({searchTerm: term}),
        setSelectedDojan: (dojan) => set({selectedDojan: dojan}),
        sotSortBy: (sort) => set({sortBy: sort}),

        getFilteredEscuelas: () =>{
            const{
                escuelas,
                searchTerm,
                selectedDojan,
                sortBy
            } = get()

            let results = [...escuelas]

            if(searchTerm){
                results = results.filter((escuela)=>
                escuela.nombre.toLowerCase().includes(searchTerm.toLowerCase()))
            }
            
            if(selectedDojan !== "todas"){
                results = results.filter((escuelasArray) => 
                    escuelasArray.dojan.includes (selectedDojan))
            }

            if(sortBy === "nombre-asc"){
                results.sort((a,b) => a.nombre.localeCompare(b.nombre))
            } else if (sortBy === "nombre-desc"){
                results.sort((a,b) => b.nombre.localeCompare(a.nombre))
            }

            return results
        }   
    }
})
export default escuelasStore