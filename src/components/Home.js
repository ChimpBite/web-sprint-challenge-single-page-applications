import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigationAction, Box } from '@material-ui/core';

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
    verticalAlign: 'bottom',
    textAlign: 'center',
  },
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Box
        className={classes.img}
        position='relative'
        textAlign='center'
        verticalAlign='bottom'
      >
        <button position='absolute'>Pizza?</button>
      </Box>
    </Box>
  );
};

export default Home;
