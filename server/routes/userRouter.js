import express from 'express'
import { addUser, getAllUsers } from '../Controller/userController.js'
const router = express.Router()

router.route('/')
        .post(addUser)

router.route('/all')
        .get(getAllUsers)


export default router