import api from "../api/ubk"

export const registerUser = async ( userData ) => {
    try {
        const res = await api.post("/newuser", userData)
        return res.data
    } catch (error) {
        throw error.response?.data || error
    }
}

export const updateUser = async (id, data) => {
    try {
        const res = await api.put(`/updateuser/${id}`, data)
        return res.data
    } catch (error) {
        throw error.response?.data || error
    }
}