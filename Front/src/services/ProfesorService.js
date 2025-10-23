import api from "../api/ubk";

export const registerProfesor = async (profesorData) => {
    try{
        const res = await api.post("/newprofesor", profesorData)
        return res.data
    } catch(error) {
        throw error.response?.data || error
    }
}

export const updateProfesor = async (id, data) => {
    try {
        const res = await api.put(`/updateprofesor/${id}`,data)
        return res.data
    } catch (error) {
        throw error.response?.data || error
    }
}