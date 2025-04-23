import api from "../api/ubk";
import { useQuery } from "@tanstack/react-query";

async function fetchDojanes() {
    const { data } = await api.get('/dojanes')
    return data
}
export function useFetchDojanes(){
    return useQuery({
        queryKey: ['dojanes'], 
        queryFn: fetchDojanes,
})
}

export function useFetchDojan(id){
    return useQuery({
        queryKey: ['dojan',id],
        queryFn:
            async function fetchDojan() {
                const { data } = await api.get(`/dojan/${id}`)
                return data
            },
            enabled:!!id
    })
}