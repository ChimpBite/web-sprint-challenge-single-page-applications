import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    marginTop: 10,
    padding: 20,
  },
  h1: {
    fontSize: '2rem',
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box} border='1px solid black'>
      <Box flexGrow={1} marginLeft={5}>
        <Typography className={classes.h1} variant='h1' component='h1'>
          Lambda Eats
        </Typography>
      </Box>
      <Box>
        <Button>Home</Button>
        <Button>Help</Button>
      </Box>
    </Box>
  );
};

export default Header;
