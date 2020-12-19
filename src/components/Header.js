import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    marginTop: 10,
    padding: 20,
  },
  h1: {
    fontSize: '2.5rem',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Box flexGrow={1} marginLeft={5}>
        <Typography className={classes.h1} variant='h1' component='h1'>
          Lambda Eats
        </Typography>
      </Box>
      <Box>
        <Link to='/'>
          <Button>Home</Button>
        </Link>
        <Link to='/'>
          <Button>Help</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
