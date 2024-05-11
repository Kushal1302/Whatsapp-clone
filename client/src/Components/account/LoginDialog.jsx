import { Typography } from '@material-tailwind/react'
import { AppBar, Box, Dialog } from '@mui/material'
import React, { useState } from 'react'
import Qr from '../../assets/qr.png'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { addUser } from '../../services/api'
import { useAccountContext } from '../../context/AccountProvider'

const LoginDialog = () => {
    const [loading, setLoading] = useState(false);
    const {setAccount} = useAccountContext()
    const onLoginSuccess = async (res) => {
        setLoading(true);
        try {
            const decoded = jwtDecode(res.credential);
            setAccount(decoded)
            await addUser(decoded);
            // You can add any further actions here upon successful login
        } catch (error) {
            console.error("Error during login:", error);
        } finally {
            setLoading(false);
        }
    }

    const onLoginError = (error) => {
        console.error("Login error:", error);
    }

    return (
        <Dialog open={true} PaperProps={{ sx: { height: '80vh', width: '60%', maxWidth: '100%', minHeight: '100%', mt: '12%', boxShadow: 'none' } }} hideBackdrop={true}>
            <Box className="grid grid-cols-12 p-5 ">
                <Box className="col-span-6">
                    <Typography className='text-2xl font-thin text-gray-600'>
                        Use Whatsapp On Your Computer
                    </Typography>
                    <Typography className='mt-12 font-normal'>
                        <ol type='1'>
                            <li>1. Open Whatsapp on your phone</li>
                            <li>2. Tap Link Devices</li>
                            <li>3. Point you phone at this screen</li>
                        </ol>
                    </Typography>
                </Box>
                <Box className="col-span-6 flex items-center flex-col" sx={{ position: 'relative' }}>
                    <img src={Qr} alt="" className='h-72' />
                    <Box sx={{ position: 'absolute', top: '50%' }}>
                        <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} disabled={loading} />
                    </Box>
                </Box>
            </Box>
        </Dialog>
    )
}

export default LoginDialog
