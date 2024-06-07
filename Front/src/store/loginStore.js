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
            const {
                access,
                nombre,
                apellido,
                tel,
                email,
                password,
                id
            }=userData
            set({user: userData, isLogged: true})
            localStorage.setItem(
                "authState", JSON.stringify({
                    user:{
                        access,
                        nombre,
                        apellido,
                        tel,
                        email,
                        password,
                        id
                    }, isLogged: true
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
                        tel: newuser.tel,
                        email: newuser.email,
                        password: newuser.password
                    }
                })
                localStorage.setItem(
                    "authState",
                    JSON.stringify({ user: newuser, registerSuccess: true})
                )
            } catch (error) {
              set({ isRegistering: false, registerSuccess: true})  
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