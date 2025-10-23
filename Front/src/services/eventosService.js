import api from "../api/ubk";

export const registerEvento = async (eventoData) => {
    try{
        const res = await api.post("/newevento", eventoData)
        return res.data
    } catch(error) {
        throw error.response?.data || error
    }
}

export const updateEvento = async (id, data) => {
    try {
        const res = await api.put(`/updateevento/${id}`,data)
        return res.data
    } catch (error) {
        throw error.response?.data || error        
    }
}