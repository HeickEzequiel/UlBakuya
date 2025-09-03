import api from "../api/ubk";
import { useQuery } from "@tanstack/react-query";

async function fetchAlumnos(token) {
    const  response  = await api.get('/alumnos', {headers:{
        Authorization: `Bearer ${token}`
    }})
    return response.data
}
export function useFetchAlumnos(){
    const authState = JSON.parse(localStorage.getItem("authState"))
    const token = authState?.token
    return useQuery({
        queryKey: ['alumnos'], 
        queryFn: ()=>fetchAlumnos(token),
})
}


export function useFetchAlumno(id){
    return useQuery({
        queryKey: ['alumno',id],
        queryFn: 
            async function fetchAlumno(){
            const { data } = await api.get(`/alumno/${id}`)
            return data
        },
        enabled:!!id
    })
}

// export function useFetchAlumnoName(name){
//     return useQuery({
//         queryKey: ['alumno',name],
//         queryFn:
//         async function fetchAlumnoName() {
//             const { data } = await api.get(`/alumno?apellido=${name}`)
//             return data
//         }
//     })
// }