import express from 'express'
import { getMessages, newMessage } from '../Controller/messageConrtoller.js'

const router = express.Router()

router.route('/add')
        .post(newMessage)
router.route('/get/:id')
        .get(getMessages)





export default router