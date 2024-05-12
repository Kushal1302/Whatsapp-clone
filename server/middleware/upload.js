import multer from "multer";
import {GridFsStorage} from "multer-gridfs-storage";

const storage = new GridFsStorage({
    url:process.env.DATABASE_URL,
    file:(req , file) => {
        const match = ["image/png" , "image/jpg" , "image/jpeg"]
        if(match.indexOf(file.mimetype) == -1){
            return `${Date.now()}-file-${file.originalname}`
        }
        return {
            bucketName:"photos",
            fileName:`${Date.now()}-file-${file.originalname}`
        }
    }
})
export default multer({storage})