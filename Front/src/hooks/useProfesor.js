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