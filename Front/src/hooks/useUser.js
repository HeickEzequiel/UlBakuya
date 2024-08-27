import api from "../api/ubk";
import { useQuery } from "@tanstack/react-query";


export function useFetchUser(id){
    return useQuery({
        queryKey: ['user',id], 
        queryFn: 
            async function fetchUser() {
                const { data } = await api.get(`/user/${id}`)
                return data
        },
       enabled:!!id
})
}