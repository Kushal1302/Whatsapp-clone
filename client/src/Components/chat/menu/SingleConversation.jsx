import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useAccountContext } from '../../../context/AccountProvider'
import { getConversation, setConversation } from '../../../services/api'

const SingleConversation = ({user}) => {
    const {setPerson , account , person, change} = useAccountContext()
    const [message , setMessage] = useState({})
    const getUser = async () => {
        setPerson(user)
        await setConversation({senderId:account.sub , receiverId:user.sub})
    }
    useEffect(() => {
        const getConversationDetails = async () => {
            const data = await getConversation({senderId:account.sub  , receiverId:user.sub})
            setMessage({
                message:data?.data.message,
                createdAt:data.data.createdAt
            })
            console.log(data)
        }
        getConversationDetails()
    },[change])
  return (
   <>
        <Box className="grid grid-cols-12 my-2 cursor-pointer hover:bg-gray-50 p-2" onClick={() => getUser() }>
            <Box className="col-span-2">
                <img src={user?.picture} alt="" className='rounded-full w-12 h-12' />
            </Box>
            <Box className="col-span-10 font-bold ">
                <Box className="flex justify-between">
                    <Typography className=''>{user?.name}</Typography>
                    <Typography sx={{fontSize:12}}>{message.createdAt && message?.createdAt.split("T")[0].split("-").join("/")}</Typography>
                </Box>
                <Box>
                    <Typography sx={{fontSize:13}}>{message.message && message.message}</Typography>
                </Box>
            </Box>
            
        </Box>
        <hr />
    </>
  )
}

export default SingleConversation
