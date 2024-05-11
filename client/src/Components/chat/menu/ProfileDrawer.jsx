import { Box, Drawer } from '@mui/material'
import React, { useContext } from 'react'
import WestIcon from '@mui/icons-material/West';
import { Typography } from '@material-tailwind/react';
import { useAccountContext } from '../../../context/AccountProvider';

const ProfileDrawer = ({open,setOpen}) => {
  const {account} = useAccountContext()
  return (
    <Box className={`${!open ? "hidden" :""}`}>
        <Box>
            <WestIcon className='cursor-pointer' onClick={() => setOpen(prev => !prev)}/>
        </Box>
        <Box className="flex justify-center mt-12">
            <img src={account?.picture} alt="" className='w-[200px] h-[200px] rounded-full' />
        </Box>
        <Box className=" mt-12">
           <Typography className='text-green-800 font-bold'>Your name</Typography>
           <Typography className='text-black font-semibold'>{account?.name}</Typography>
        </Box>
        <Box className=" mt-12">
           <Typography className='text-green-800 font-bold'>About</Typography>
           <Typography className='text-black font-semibold'>Nothing is impossible</Typography>
        </Box>
    </Box>
  )
}

export default ProfileDrawer
