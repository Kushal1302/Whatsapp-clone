import { Box, Typography } from '@mui/material'
import React from 'react'
import { useAccountContext } from '../../../context/AccountProvider'
import { setConversation } from '../../../services/api'

const SingleConversation = ({user}) => {
    const {setPerson , account} = useAccountContext()
    const getUser = async () => {
        setPerson(user)
        await setConversation({senderId:account.sub , receiverId:user.sub})
    }
  return (
   <>
        <Box className="grid grid-cols-12 my-2 cursor-pointer hover:bg-gray-50 p-2" onClick={() => getUser() }>
            <Box className="col-span-2">
                <img src={user?.picture} alt="" className='rounded-full w-12 h-12' />
            </Box>
            <Box className="col-span-10 font-bold">
                <Typography className=''>{user?.name}</Typography>
            </Box>
            
        </Box>
        <hr />
    </>
  )
}

export default SingleConversation
