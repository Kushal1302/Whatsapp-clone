import { Box } from '@mui/material';
import React, { useEffect , useState , useRef} from 'react';
import { useAccountContext } from '../../context/AccountProvider';
import { getMessages } from '../../services/api';
import SingleMessage from './chat/SingleMessage';

const Messages = ({conversation}) => {
  const {person , account , socket , change ,setChange} = useAccountContext();
  const [messages , setMessages] = useState([]);
  const [incomingMessage , setIncomingMessage] = useState(null)
  const messagesEndRef = useRef(null);
  useEffect(() => {
    socket.current.on("getMessage" , data => {
      setIncomingMessage({
        ...data,
        createdAt:Date.now()
      })
    })
  })
  useEffect(() => {
    const getAllMessages = async () => {
      const response = await getMessages(conversation.id);
      setMessages(response.data);
    };
    if (conversation.id) getAllMessages();
  },[conversation.id , person.id , change]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    incomingMessage && conversation?.members.includes(incomingMessage.senderId) && 
    setMessages(prev => [...prev , incomingMessage])
  },[incomingMessage , conversation])

  return (
    <Box className="w-full bg-green-50" style={{ height: 'calc(99vh - 150px)', overflowY: 'auto' }}>
      {
        messages && messages.map(message => (
          <SingleMessage key={message.id} message={message} />
        ))
      }
      <div ref={messagesEndRef}></div> {/* Empty div to focus scrolling */}
    </Box>
  );
};

export default Messages;
