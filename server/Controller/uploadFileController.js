

export const uploadNewFile = (req , res) => {
    try {
        if(!req.file){
            return res.status(200).json({message:"File not found"})
        }
        const imageUrl = `${process.env.url}/file/${req.file.fileName}`
        return res.status(200).json(imageUrl)
        
    } catch (error) {
        return res.json("File not found")
    }
}