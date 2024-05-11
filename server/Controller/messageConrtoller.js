import prisma from "../db/db.js"

export const newMessage = async (req , res) => {
    try {
        const message = await prisma.messages.create({
            data:req.body
        })
        const messageUpdate = await prisma.conversation.update({
            where:{
                id:req.body.conversationId
            },
            data:{
                message:req.body.text
            }
        })
        return res.json({message:"Message Added"})

    } catch (error) {
        console.log(error)
    }
}
export const getMessages = async (req , res) => {
    try {
        const messages = await prisma.messages.findMany({
            where:{
                conversationId:req.params.id
            }
        })
        return res.json(messages)
    } catch (error) {
        console.log(error.message)
    }
}