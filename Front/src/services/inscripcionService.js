import api from "../api/ubk";

export const registerInscripcion = async (inscripcionData) => {
    try{
        const res = await api.post("/newinscripcion", inscripcionData)
        return res.data
    } catch(error) {
        throw error.response?.data || error
    }
}

export const updateInscripcion = async (id, data) => {
    try {
        const res = await api.put(`/updateinscripcion/${id}`,data)
        return res.data
    } catch (error) {
        throw error.response?.data || error        
    }
}