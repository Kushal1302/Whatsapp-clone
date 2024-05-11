import { Button, Typography } from '@material-tailwind/react'
import { Box } from '@mui/material'
import React, { useContext } from 'react'

const EmptyChat = () => {
  return (
    <Box className="flex flex-col items-center justify-center h-full leading-3" >
        <img src="https://static.whatsapp.net/rsrc.php/v3/y6/r/wa669aeJeom.png" alt="" className='w-96' />
        <Typography className='text-3xl leading-10'>
            Download Whatsapp for windows
        </Typography>
        <Typography className='leading-10'>
            Make calls, share your screen and get a faster experience when you download the Windows app.
        </Typography>
        <Button className='bg-green-500 rounded-full mt-2'>Get from Microsoft Store</Button>
    </Box>
  )
}

export default EmptyChat
