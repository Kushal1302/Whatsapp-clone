import express from 'express'
import { getImage } from '../Controller/fileController.js'

const router = express.Router()

router.route('/:filename')
        .get(getImage)






export default router