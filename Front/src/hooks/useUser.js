import api from "../api/ubk";
import { useQuery } from "@tanstack/react-query";

async function fetchUser() {
    const { data } = await api.get('/user')
    return data
}
export function useFetchUser(){
    return useQuery({
        queryKey: ['user'], 
        queryFn: fetchUser,
})
}