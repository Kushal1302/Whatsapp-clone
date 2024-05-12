import { BottomNavigation, Box, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import { useAccountContext } from '../../context/AccountProvider';
import { newMessage, uploadFile } from '../../services/api';

const Footer = ({conversation }) => {
  const [text , setText] = useState("")
  const [file , setFile] = useState()
  const {account , person , socket , setChange} = useAccountContext()
  useEffect(() => {
    const getImage = async () => {
      if(file){
        const data = new FormData()
        data.append("name" , file.name)
        data.append("file" , file)
        // await uploadFile(data)
      }
      
    }
    getImage()
  },[file])

  const onFileChange = (e) => {
    setFile(e.target.files[0])
    console.log(e)
  }
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

          socket.current.emit("sendMessage" , message)
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
            <label htmlFor="forFiles">
              <AddIcon className='ml-3 cursor-pointer '/>
            </label>
            <input type="file" id='forFiles' style={{display:'none'}} onChange={onFileChange} />
            <input type="text" placeholder='type a message' value={text} className='w-[89%] ml-3 p-2 rounded-xl border-gray-400 focus:outline-none border-2' onChange={(e) => {setText(e.target.value); setChange(false);}} onKeyDown={sendText}/>
            <SendIcon className='ml-3 cursor-pointer text-green-800 font-bold'/>
        </Box>
    </Box>
    </>
  )
}

export default Footer
