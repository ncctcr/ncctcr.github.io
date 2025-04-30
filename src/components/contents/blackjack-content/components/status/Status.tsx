import React from 'react';
import { Box, Divider, Typography } from '@mui/material';

type StatusProps = {
  message: string,
  balance: number
};

const Status: React.FC<StatusProps> = ({ message, balance }) => {
  return (
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} style={{background: '#ffffff1c'}} borderRadius={3} p={1}>
        <Box width={'100%'}>
          <Typography fontSize={24} fontWeight={'bold'} textAlign={'center'}>{message}</Typography>
        </Box>
        <Divider orientation="vertical" variant="middle" style={{background: 'rgba(255,255,255,0.6)'}} />
        <Box width={100} textAlign={'center'}>
          <Typography fontSize={24} fontWeight={'bold'} textAlign={'center'} lineHeight={0.8}>${balance}</Typography>
        </Box>
      </Box>
  );
}

export default Status;