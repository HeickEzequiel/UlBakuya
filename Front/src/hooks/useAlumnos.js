import api from "../api/ubk";
import { useQuery } from "@tanstack/react-query";

async function fetchAlumnos() {
    const { data } = await api.get('/alumnos')
    return data
}
export function useFetchAlumnos(){
    return useQuery({
        queryKey: ['alumnos'], 
        queryFn: fetchAlumnos,
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