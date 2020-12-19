import React from 'react';
import { Box, Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <Box display='flex' marginBottom={5}>
      <Typography variant='p' component='p'>
        &copy; {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
