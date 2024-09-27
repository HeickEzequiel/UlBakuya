import api from "../api/ubk";
import { useQuery } from "@tanstack/react-query";

export function usefetchUsers(){
    return useQuery({
        queryKey:['users'],
        queryFn:
            async function fetchUsuarios(){
                const { data } = await api.get('/users')
                return data
            }
    })
    
}

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