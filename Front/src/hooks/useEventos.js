import api from "../api/ubk";
import { useQuery } from "@tanstack/react-query";

export function useFetchEventos(){
    return useQuery({
        queryKey: ['eventos'],
        queryFn: async function fetchEvento() {
            const { data } = await api.get('/eventos')
            return data
        }
    })
}

export function useFetchEvento(id){
    return useQuery({
        queryKey: ['evento'. id],
        queryFn:
            async function fetchEvento() {
                const { data } = await api.get(`/evento/${id}`)
                return data
            },
            enabled:!!id
    })
}