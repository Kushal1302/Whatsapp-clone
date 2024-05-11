import prisma from "../db/db.js"

const addUser = async (req , res) => {
    try {
        const user = await prisma.user.findUnique({
            where:{
                sub:req.body.sub
            }
        })
        if(!user) {
            const data = await prisma.user.create({
                data:{
                    iss : req.body.iss,
                    azp :req.body.azp,
                    aud :req.body.aud,
                    sub  :req.body.sub,
                    email :req.body.email,
                    email_verified :req.body.email_verified,
                    nbf :req.body.nbf,
                    name :req.body.name,
                    picture :req.body.picture,
                    given_name :req.body.given_name,
                    family_name :req.body.family_name,
                    iat :req.body.iat,
                    exp :req.body.exp,
                    jti :req.body.jti
                }
            })
            return res.json({message:"User created"})
        }else{
            return res.json({message:"Already Exits"})
        }
    } catch (error) {
        console.log(error)
    }
}
const getAllUsers = async (req , res) => {
    try {
        const users = await prisma.user.findMany()
        return res.json({
            data:users
        })
    } catch (error) {
        console.log(error.message)
        return res.json({message:"Something went wrong"})
    }
}
export {
    addUser,
    getAllUsers
}