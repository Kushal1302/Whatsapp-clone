import express from 'express'
import { newConversation , getConversation } from '../Controller/conversationController.js'
const router = express.Router()

router.route('/add')
        .post(newConversation)
router.route('/get')
        .post(getConversation)




export default router