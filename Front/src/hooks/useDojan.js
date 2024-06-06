import api from "../api/ubk";
import { useQuery } from "@tanstack/react-query";

async function fetchDojan() {
    const { data } = await api.get('/dojanes')
    return data
}
export function useFetchDojan(){
    return useQuery({
        queryKey: ['dojanes'], 
        queryFn: fetchDojan,
})
}