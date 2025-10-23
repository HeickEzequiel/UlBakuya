
export const uploadImage = async (file) =>{
    if(!file) throw new Error("No se recibio archivo")
    
        const data = new FormData()
        data.append("file", file)
        
        const res = await fetch(
            "http://localhost:3001/upload",
            {
                method: "POST",
                body: data
            }
        )

        const fileData = await res.json()

        if(!res.ok) {
            throw new Error(fileData.error?.message || "Error al subir la imagen")
        }

        return fileData.secure_url
}


export const uploadImageWithId = async (file, publicId) => {
    if(!file) throw new Error("No se recibio archivo")

    const data = new FormData ()
    data.append("file", file)

    const endpoint = publicId
    ? `http://localhost:3001/upload/${publicId}`
    : "http://localhost:3001/upload";

    const res = await fetch(
        endpoint,
        {
            method: "POST",
            body: data
        }
    )

    if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.error|| "Error al subir la imagen")
    }

    const fileData = await res.json()

    return fileData.secure_url
}