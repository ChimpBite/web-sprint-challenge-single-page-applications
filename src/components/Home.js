import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box } from '@material-ui/core';
import { SportsRugbySharp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
  },
  img: {
    width: '100%',
    height: 500,
    backgroundImage: 'url(https://source.unsplash.com/MQUqbmszGGM/1600x900)',
  },
  button: {
    bottom: -400,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.3)',
    fontSize: '2rem',
    width: '20%',
  },
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Box className={classes.img} position='relative' textAlign='center'>
        <Button className={classes.button} position='absolute'>
          Pizza?
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
