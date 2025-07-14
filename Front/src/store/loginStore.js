import { create } from 'zustand'
import axios from 'axios'

const userStore = create((set)=>{
    const initialState = () =>{
        const storedState = localStorage.getItem("authState")
        
        if(storedState){
            return JSON.parse(storedState)
        }
        return{
            user:{
                nombre:"",
                apellido:"",
                imagen:"",
                fecha_de_nacimiento:"",
                tel:"",
                email:"",
                password: ""
            },
            isLogged: false,
            isRegistering: false,
            registerSuccess: false,
        }
    }
    return{
        ...initialState(),

        login: (userData) => {
            const { access, nombre, apellido, imagen, fecha_de_nacimiento, tel, email, password, id, nivel }=userData
            set({user: userData, isLogged: true})
            localStorage.setItem("authState", JSON.stringify({
                    user:{ access, nombre, apellido, imagen, fecha_de_nacimiento, tel, email, password, id, nivel }, 
                    isLogged: true
                })
            )
        },

        register: async (userData)=> {
            set({
                isRegistering: true,
                registerSuccess: false
            })
            try {
                const response = await axios.post(`http://localhost:3001/newuser`, userData)
                const newuser = response.data
                

                set({
                    isRegistering: false,
                    registerSuccess: true,
                    user:{
                        nombre: newuser.nombre,
                        apellido: newuser.apellido,
                        fecha_de_nacimiento: newuser.fecha_de_nacimiento,
                        imagen: newuser.imagen,
                        tel: newuser.tel,
                        email: newuser.email,
                        password: newuser.password
                    }
                })
                localStorage.setItem(
                    "authState",
                    JSON.stringify({ user: newuser, registerSuccess: true})
                )
                
                alert("Usuario creado con éxito");

            } catch (error) {
              set({ isRegistering: false, registerSuccess: false})  
                if(error.response.request.status === 401){
                    alert("Ya existe un usuario registrado con ese correo electrónico")
                }
            }
        },

        logout: () => {
            set({ user: null, isLogged: false });
            localStorage.removeItem("authState");
            localStorage.removeItem("login");
            localStorage.removeItem("userData");
            localStorage.removeItem("authStateLogin");
            window.location.replace('/');
        },

    }
})

export default userStore