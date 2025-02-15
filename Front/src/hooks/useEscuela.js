import api from "../api/ubk"
import { useQuery } from "@tanstack/react-query"

export function useFetchEscuelas(){
    return useQuery({
        queryKey: ['escuelas'],
        queryFn: async function fetchEscuelas(){
            const { data } = await api.get('/escuelas')
            return data
        }

    })
}

export function useFetchEscuela(){
    return useQuery({
        queryKey: ['escuela'. id],
        queryFn: 
            async function fetchEscuela() {
                const { data } = await api.get(`/escuela/${id}`)
                return data
            }
    })
}
