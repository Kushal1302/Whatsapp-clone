import React, { useContext } from 'react'
import LoginDialog from './account/LoginDialog'
import { AppBar, Box, Toolbar } from '@mui/material'
import ChatDialog from './chat/ChatDialog'
import { useAccountContext } from '../context/AccountProvider'

const Messanger = () => {
  const {account} = useAccountContext()
  return (
    <>
    <Box >
    {
        account ?
        <>
        <AppBar position="static">
        <Toolbar className='h-24 bg-[#00a884]'>
        </Toolbar>
        </AppBar>
        <ChatDialog/>
        </>
        :
        <Box>
            <AppBar position="static">
                <Toolbar className='h-48 bg-[#00a884]'>
                </Toolbar>
            </AppBar>
            <LoginDialog/>
        </Box>
        // "Hello"
    }
    </Box>
    </>
  )
}

export default Messanger
