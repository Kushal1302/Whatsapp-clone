import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import userRouter from './routes/userRouter.js'
import conversationRouter from './routes/conversationRouter.js'
import messageRouter from './routes/messageRouter.js'
const app = express()
app.use(cors())
app.use(express.json())
app.use('/user' , userRouter)
app.use('/conversation',conversationRouter)
app.use('/message' , messageRouter)
const PORT = process.env.PORT || 8000
app.listen(PORT , () => console.log("Listening :" , PORT))
