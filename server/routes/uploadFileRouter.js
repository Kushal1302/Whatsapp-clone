import express from 'express'
import { uploadNewFile } from '../Controller/uploadFileController.js'
import upload from '../middleware/upload.js'

const router = express.Router()

router.route('/file')
        .post(upload.single("file") ,  uploadNewFile)






export default router