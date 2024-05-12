import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import Footer from './Footer'
import { useAccountContext } from '../../context/AccountProvider'
import { getConversation } from '../../services/api'

const ChatBox = () => {
  const {account , person , change , setChange} = useAccountContext()
  const [conversation , setConversation] = useState({})
  useEffect(() => {
    const getConversationDetails = async () => {
     const response =  await getConversation({senderId:account.sub , receiverId:person.sub})
     console.log(response.data)
     setConversation(response.data)
    }
    getConversationDetails()
  },[person.sub])
  
  return (
    <Box>
        <ChatHeader/>
        <Messages conversation={conversation} />
        <Footer conversation={conversation} />
    </Box>
  )
}

export default ChatBox
