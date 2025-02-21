import api from "../api/ubk";
import { useQuery } from "@tanstack/react-query";

async function fetchProfes() {
    const { data } = await api.get('/profesores')
    return data
}
export function useFetchProfes(){
    return useQuery({
        queryKey: ['profesores'], 
        queryFn: fetchProfes,
})
}

export function useFetchProfe(id){
    return useQuery({
        queryKey: ['profesor',id],
        queryFn: 
            async function fetchProfe(){
            const { data } = await api.get(`/profesor/${id}`)
            return data
        },
        enabled:!!id
    })
}