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