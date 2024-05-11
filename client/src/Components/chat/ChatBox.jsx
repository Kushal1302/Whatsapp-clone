import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import Footer from './Footer'
import { useAccountContext } from '../../context/AccountProvider'
import { getConversation } from '../../services/api'

const ChatBox = () => {
  const {account , person} = useAccountContext()
  const [conversation , setConversation] = useState({})
  useEffect(() => {
    const getConversationDetails = async () => {
     const response =  await getConversation({senderId:account.sub , receiverId:person.sub})
     console.log(response.data)
     setConversation(response.data)
    }
    getConversationDetails()
  },[person.sub])
  const [change , setChange] = useState(false)
  return (
    <Box>
        <ChatHeader/>
        <Messages conversation={conversation} change={change}/>
        <Footer conversation={conversation} setChange={setChange}/>
    </Box>
  )
}

export default ChatBox
