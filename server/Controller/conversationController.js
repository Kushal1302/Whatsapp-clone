import prisma from '../db/db.js'

export const newConversation = async (req, res) => {
    try {
        const { senderId, receiverId } = req.body

        // Check if the conversation already exists
        const exists = await prisma.conversation.findFirst({
            where: {
                AND: [
                    { members: { hasEvery: [senderId, receiverId] } }
                ]
            }
        })

        // If conversation doesn't exist, create a new one
        if (!exists) {
            const newConversation = await prisma.conversation.create({
                data: {
                    members: [senderId, receiverId]
                }
            })
            return res.json({ message: "Conversation Created", conversation: newConversation })
        } else {
            // If conversation exists, return some message or data
            return res.json({ message: "Conversation already exists", conversation: exists })
        }
    } catch (error) {
        console.error("Error creating conversation:", error.message)
        return res.status(500).json({ error: "Internal Server Error" })
    }
}
export const getConversation = async (req, res) => {
    try {
        const { senderId, receiverId } = req.body
        const conversation = await prisma.conversation.findFirst({
            where: {
                AND: [
                    { members: { hasEvery: [senderId, receiverId] } }
                ]
            }
        })
        return res.status(200).json(conversation)

        
    } catch (error) {
        console.error("Error getting conversation:", error.message)
        return res.status(500).json({ error: "Internal Server Error" })
    }
}