import { create } from "zustand";
import axios from "axios";

const eventoStore = create((set, get)=>{
    const initialState = () =>{
        const storedState = localStorage.getItem("eventoState")
        if(storedState){
            return JSON.parse(storedState)
        }
        return{
            evento:{
                tipo_de_evento:"",
                fecha_del_evento:"",
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
                        fecha_del_evento: newEvento.fecha_del_evento,
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
        },
        
        eventos: [],
        searchTerm:"",
        selectedEvento:"todas",
        selectedFecha:"todas",
        selectedHorario:"todas",
        sortByEvento:"tipo_de_evento-asc",
        sortByFecha:"fecha_del_evento-asc",

        setEventos:(eventos) => set({eventos}),
        SetSearchTerm:(term) => set({searchTerm: term}),
        setSelectedEvento:(evento) => set({selectedEvento: evento}),
        setSelectedFecha:(fecha) => set({selectedFecha: fecha}),
        setSelectedHorario:(horario) => set({selectedHorario: horario}),
        setSortByEvento: (sort) => set({sortByEvento: sort}),
        setSortByFecha: (sort) => set({sortByFecha: sort}),

        getFilteredEvento: () =>{
            const{
                eventos,
                searchTerm,
                selectedEvento,
                selectedFecha,
                selectedHorario,
                sortByEvento,
                sortByFecha
            } = get()

            let results = [...eventos]

            if(searchTerm){
                results = results.filter((evento)=>
                evento.tipo_de_evento.toLowerCase().includes(searchTerm.toLowerCase()))
            }

            if(selectedEvento !== "todas"){
                results = results.filter((eventoArray) => eventoArray.tipo_de_evento === selectedEvento)
            }
            if(selectedFecha !== "todas"){
                results = results.filter((eventoArray) => eventoArray.fecha_del_evento === selectedFecha)
            }
            if(selectedHorario !== "todas"){
                results = results.filter((eventoArray) => eventoArray.horarios === selectedHorario)
            }

            if(sortByEvento === "tipo_de_evento-asc"){
                results.sort((a,b) => a.tipo_de_evento.localeCompare(b.tipo_de_evento))
            } else if (sortByEvento === "tipo_de_evento-desc"){
                results.sort((a,b) => b.tipo_de_evento.localeCompare(a.tipo_de_evento))
            }

            if(sortByFecha === "fecha_del_evento-asc"){
                results.sort((a,b) => a.fecha_del_evento.localeCompare(b.fecha_del_evento))
            } else if (sortByFecha === "fecha_del_evento-desc"){
                results.sort((a,b) => b.fecha_del_evento.localeCompare(a.fecha_del_evento))
            }

            return results
        }
    }
})
export default eventoStore