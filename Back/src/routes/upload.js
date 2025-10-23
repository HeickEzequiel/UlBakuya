const express = require("express")
const router = express.Router()
const cloudinary = require("../config/cloudinary")
const multer = require("multer")
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/:publicId?", upload.single("file"), async (req, res) =>{
    try {
        const { publicId } = req.params
        const options = {
            folder: "imagenesUBK",
            overwrite: true,
            resource_type: "image"
        }

        if(publicId) options.public_id = publicId

        const result = await cloudinary.uploader.upload_stream(
            options,
            (error, result) =>{
                if(error){
                    console.error(error)
                    return res.status(500),json({ error: error.message})
                }
                res.json({secure_url: result.secure_url})
            })
            result.end(req.file.buffer)

        } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
})

module.exports = router