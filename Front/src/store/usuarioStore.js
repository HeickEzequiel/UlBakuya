import { create } from "zustand";
import api from "../api/ubk";

const usuarioStore = create((set, get)=>{
    const initialState = () =>{
        const storedState = localStorage.getItem("usuarioState")
        if(storedState){
            return JSON.parse(storedState)
        }
        return{
            usuario:{
                nombre:"",
                apellido:"",
                fecha_de_nacimiento:"",
                tel:"",
                email:"",
                password:"",
                nivel:"",
                imagen:"",
                escuela:"",
                profesor:"",
                graduacion:"",
                fecha_de_examen:""
            },
            isRegistering: false,
            registerSuccess: false
        }
    }
    return{
        ...initialState(),

        register: async (usuarioData)=>{
            set({
                isRegistering: true,
                registerSuccess: false
            })
            try {

                const response = await api.post(`/newuser`, usuarioData)
                const newUsuario = response.data
        
                set({
                    isRegistering: false,
                    registerSuccess: true,
                    usuario:{
                        nombre: newUsuario.nombre,
                        apellido: newUsuario.apellido,
                        fecha_de_nacimiento: newUsuario.fecha_de_nacimiento,
                        tel:newUsuario.tel,
                        email:newUsuario.email,
                        password:newUsuario.password,
                        nivel:newUsuario.nivel,
                        imagen: newUsuario.imagen,
                        escuela: newUsuario.escuela,
                        profesor: newUsuario.profesor,
                        graduacion: newUsuario.graduacion,
                        fecha_de_examen: newUsuario.fecha_de_examen
                    }
                })
                localStorage.setItem(
                    "usuarioState",
                    JSON.stringify({ usuario: newUsuario, registerSuccess: true})
                )
            } catch (error) {
                set({isRegistering: false, registerSuccess: false})
            }
        },

        usuarios: [],
        searchTerm:"",
        selectedNivel:"todas",
        sortBy:"nombre-asc",

        setUsuarios:(usuarios) => set({usuarios}),
        setSearchTerm:(term) => set({searchTerm: term}),
        setSelectedNivel:(nivel) => set({selectedNivel: nivel}),
        setSortBy: (sort) => set({sortBy: sort}),

        getFilteredUsuarios: () =>{
            const{
                usuarios,
                searchTerm,
                selectedNivel,
                sortBy
            } = get()

            let results = [...usuarios]

            if(searchTerm){
                results = results.filter((usuario)=>
                usuario.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                usuario.apellido.toLowerCase().includes(searchTerm.toLowerCase())
                )
            }

            if(selectedNivel !== "todas"){
                results = results.filter((usuariosArray)=> usuariosArray.nivel.toLowerCase() === selectedNivel.toLowerCase())
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

export default usuarioStore