import api from "../api/ubk";

export const registerAlumno = async (alumnoData) => {
    try{
        const res = await api.post("/newalumno", alumnoData)
        return res.data
    } catch(error) {
        throw error.response?.data || error
    }
}

export const updateAlumno = async (id, data) => {
    try {
        const res = await api.put(`/updatealumno/${id}`,data)
        return res.data
    } catch (error) {
        throw error.response?.data || error
    }
}