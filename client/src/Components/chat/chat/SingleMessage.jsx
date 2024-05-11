import { Box, Typography, Avatar } from '@mui/material';
import React from 'react';
import { useAccountContext } from '../../../context/AccountProvider';

const SingleMessage = ({ message }) => {
    const { account } = useAccountContext();

    // Determine if the message is sent by the current user
    const isSentByCurrentUser = account.sub === message.senderId;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: isSentByCurrentUser ? 'flex-end' : 'flex-start',
                margin: '8px 4px',
            }}
        >
            <Box
                sx={{
                    maxWidth: '70%',
                    padding: '8px',
                    borderRadius: '10px',
                    backgroundColor: isSentByCurrentUser ? '#DCF8C6' : '#fff',
                    marginLeft: isSentByCurrentUser ? '8px' : '0',
                }}
            >
                <Typography sx={{ wordWrap: 'break-word' }}>{message.text}</Typography>
                <Typography
                    sx={{
                        fontSize: '0.7rem',
                        color: '#888',
                        marginTop: '4px',
                        textAlign: isSentByCurrentUser ? 'right' : 'left',
                    }}
                >
                    {new Date(message.createdAt).toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                    })}
                </Typography>
            </Box>
        </Box>
    );
};

export default SingleMessage;
