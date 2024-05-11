import { Avatar, Typography } from '@material-tailwind/react'
import { Box } from '@mui/material'
import React, { useContext, useState } from 'react'
import AddCommentIcon from '@mui/icons-material/AddComment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { useAccountContext } from '../../../context/AccountProvider';
import Conversation from './Conversation';

const Menu = ({setOpen}) => {
    const {account} = useAccountContext()
    const [text , setText] = useState("")
  return (
   <Box>
    <Box className="flex justify-between">
        <Typography className='text-2xl font-semibold'>Chats</Typography>
        <Box>
        <AddCommentIcon className='mr-4 cursor-pointer'/>
        <Avatar alt="Remy Sharp" src={account?.picture} className='h-10 w-10 cursor-pointer ' onClick={() => setOpen(prev => !prev)}/>
        </Box>
    </Box>
    <Box className="w-full border-2 mt-4 p-1 rounded-xl flex items-center bg-gray-50">
        <SearchIcon className='mr-2 text-gray-500'/>
        <input type="text" placeholder='Search' className='focus:outline-0 w-full bg-none' onChange={(e) => setText(e.target.value)}/>
    </Box>
        <Conversation text={text}/>

   </Box>
  )
}

export default Menu
