import { BottomNavigation, Box, Paper } from '@mui/material';
import React, { useState } from 'react'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import { useAccountContext } from '../../context/AccountProvider';
import { newMessage } from '../../services/api';

const Footer = ({conversation , setChange}) => {
  const [text , setText] = useState("")
  const {account , person} = useAccountContext()
  const sendText = async (e) => {
    try {
      if(e.key === "Enter"){
        let message = {
          senderId:account.sub,
          receiverId:person.sub,
          conversationId:conversation.id,
          type:'text',
          text:text
        }
        if(text != ""){
          const response = await newMessage(message)
          console.log(response)
          setChange(true)
        }
        setText("")
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <>
    <Box className='h-[8vh]'>
        <Box className="flex items-center h-full">
            <InsertEmoticonIcon className=' ml-3 cursor-pointer text-orange-800'/>
            <AddIcon className='ml-3 cursor-pointer '/>
            <input type="text" placeholder='type a message' value={text} className='w-[89%] ml-3 p-2 rounded-xl border-gray-400 focus:outline-none border-2' onChange={(e) => setText(e.target.value)} onKeyDown={sendText}/>
            <SendIcon className='ml-3 cursor-pointer text-green-800 font-bold'/>
        </Box>
    </Box>
    </>
  )
}

export default Footer
