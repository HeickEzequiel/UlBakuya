import api from "../api/ubk";

export const registerDojan = async (dojanData) => {
    try{
        const res = await api.post("/newdojan", dojanData)
        return res.data
    } catch(error) {
        throw error.response?.data || error
    }
}

export const updateDojan = async (id, data) => {
    try {
        const res = await api.put(`/updatedojan/${id}`,data)
        return res.data
    } catch (error) {
        throw error.response?.data || error        
    }
}