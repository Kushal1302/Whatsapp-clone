import { Box } from '@mui/material'
import React, { useEffect , useState } from 'react'
import { useAccountContext } from '../../context/AccountProvider'
import { getMessages } from '../../services/api'
import SingleMessage from './chat/SingleMessage'

const Messages = ({conversation , change}) => {
  const {person , account} = useAccountContext()
  const [messages , setMessages] = useState([])
  useEffect(() => {
    const getAllMessages = async () => {
      const response = await getMessages(conversation.id)
      setMessages(response.data)
    }
      conversation.id && getAllMessages()
  },[conversation.id , person.id , change])
  return (
    <Box className="w-full bg-green-50" style={{ height: 'calc(99vh - 150px)', overflowY: 'auto' }}>
      {
        messages && messages.map(message => (
          <SingleMessage message={message} />
        ))
      }
    </Box>
  )
}

export default Messages
