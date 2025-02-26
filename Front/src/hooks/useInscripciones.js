import api from "../api/ubk";
import { useQuery } from "@tanstack/react-query";

export function useFetchInscripciones(){
    return useQuery({
        queryKey:['Inscripciones'],
        queryFn: async function fetchInscripciones(){
            const { data } = await api.get('/escuelas')
            return data
        }
    })
}

export function useFetchInscripcion(id){
    return useQuery({
        queryKey: ['escuela'. id],
        queryFn:
            async function fetchInscripcion() {
                const { data } = await api.get(`/escuela/${id}`)
                return data                
            },
            enabled:!!id
    })
}