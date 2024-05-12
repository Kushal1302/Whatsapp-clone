import { Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import SingleConversation from './SingleConversation'
import { useAccountContext } from '../../../context/AccountProvider'
import { allUsers } from '../../../services/api'

const Conversation = ({ text }) => {
    const [users, setUsers] = useState([])
    const { account , socket , setActiveUsers } = useAccountContext()

    useEffect(() => {
        const fetchData = async () => {
            const response = await allUsers()
            const filteredData = response?.data?.data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
            setUsers(filteredData || [])
        }

        fetchData()
    }, [text])

    useEffect(() => {
        socket.current.emit("addUser" , account)
        socket.current.on("getUsers" , users => {
            setActiveUsers(users)
            console.log(users)
        })

    },[account])

    return (
        <Box>
            {
                users?.map(user => (
                    user.sub !== account.sub &&
                    <SingleConversation key={user.sub} user={user} />
                ))
            }
        </Box>
    )
}

export default Conversation
