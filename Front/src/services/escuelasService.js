import api from "../api/ubk";

export const registerEscuela = async (escuelaData) => {
    try{
        const res = await api.post("/newescuela", escuelaData)
        return res.data
    } catch(error) {
        throw error.response?.data || error
    }
}

export const updateEscuela = async (id, data) => {
    try {
        const res = await api.put(`/updateescuela/${id}`,data)
        return res.data
    } catch (error) {
        throw error.response?.data || error        
    }
}