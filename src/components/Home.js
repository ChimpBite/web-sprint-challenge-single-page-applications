import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, Typography, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    flexDirection: 'column',
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
    underline: 'none',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Box className={classes.img} position='relative' textAlign='center'>
        <Link to='/Pizza' style={{ textDecoration: 'none' }}>
          <Button className={classes.button} position='absolute'>
            Pizza?
          </Button>
        </Link>
      </Box>
      <Box display='flex' flexDirection='column' marginTop={1}>
        <Box padding={5}>
          <Typography variant='h4' component='h4'>
            Food Delivery in Gotham City
          </Typography>
        </Box>

        <Box
          display='flex'
          justifyContent='space-around'
          marginTop={1}
          marginBottom={2}
        >
          <Box width={400}>
            <img
              src={'https://source.unsplash.com/zK_eqqfUMcw/400x300'}
              alt=''
            />
            <Box margin={2}>
              <Box marginBottom={1}>
                <Typography variant='h5' component='h5'>
                  McDonalds
                </Typography>
              </Box>
              <Box>
                <Typography variant='p' component='p' fontWeight='bold'>
                  $ - American - Fast Food - Burgers
                </Typography>
              </Box>
              <Box
                display='flex'
                justifyContent='space-around'
                marginTop={2}
                marginBottom={2}
              >
                <Box border='1px solid black' padding={1} borderRadius={5}>
                  <Typography variant='p' component='p' fontWeight='bold'>
                    20-30 Min
                  </Typography>
                </Box>
                <Box border='1px solid black' padding={1} borderRadius={5}>
                  <Typography variant='p' component='p' fontWeight='bold'>
                    $5.99 Delivery Fee
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box width={400}>
            <img
              src={'https://source.unsplash.com/oD9apEToXAY/400x300'}
              alt=''
            />
            <Box margin={2}>
              <Box marginBottom={1}>
                <Typography variant='h5' component='h5'>
                  Sweetgreen
                </Typography>
              </Box>
              <Box>
                <Typography variant='p' component='p' fontWeight='bold'>
                  $ - Healthy - Salads
                </Typography>
              </Box>
              <Box
                display='flex'
                justifyContent='space-around'
                marginTop={2}
                marginBottom={2}
              >
                <Box border='1px solid black' padding={1} borderRadius={5}>
                  <Typography variant='p' component='p' fontWeight='bold'>
                    30-45 Min
                  </Typography>
                </Box>
                <Box border='1px solid black' padding={1} borderRadius={5}>
                  <Typography variant='p' component='p' fontWeight='bold'>
                    $4.99 Delivery Fee
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box width={400}>
            <img
              src={'https://source.unsplash.com/jy4t6SY9Ax0/400x300'}
              alt=''
            />
            <Box margin={2}>
              <Box marginBottom={1}>
                <Typography variant='h5' component='h5'>
                  Starbucks
                </Typography>
              </Box>
              <Box>
                <Typography variant='p' component='p' fontWeight='bold'>
                  $ - Cafe - Coffee $ Tea - Breakfast and Brunch
                </Typography>
              </Box>
              <Box
                display='flex'
                justifyContent='space-around'
                marginTop={2}
                marginBottom={2}
              >
                <Box border='1px solid black' padding={1} borderRadius={5}>
                  <Typography variant='p' component='p' fontWeight='bold'>
                    10-20 Min
                  </Typography>
                </Box>
                <Box border='1px solid black' padding={1} borderRadius={5}>
                  <Typography variant='p' component='p' fontWeight='bold'>
                    $3.99 Delivery Fee
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider variant='middle' />
        <Box
          display='flex'
          justifyContent='space-around'
          marginTop={2}
          marginBottom={2}
        >
          <Box width={400}>
            <img
              src={'https://source.unsplash.com/ueusdn9w3S4/400x300'}
              alt=''
            />
            <Box margin={2}>
              <Box marginBottom={1}>
                <Typography variant='h5' component='h5'>
                  IN-N-OUT
                </Typography>
              </Box>
              <Box>
                <Typography variant='p' component='p' fontWeight='bold'>
                  $ - American - Fast Food - Burgers
                </Typography>
              </Box>
              <Box
                display='flex'
                justifyContent='space-around'
                marginTop={2}
                marginBottom={2}
              >
                <Box border='1px solid black' padding={1} borderRadius={5}>
                  <Typography variant='p' component='p' fontWeight='bold'>
                    20-30 Min
                  </Typography>
                </Box>
                <Box border='1px solid black' padding={1} borderRadius={5}>
                  <Typography variant='p' component='p' fontWeight='bold'>
                    $5.99 Delivery Fee
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box width={400}>
            <img
              src={'https://source.unsplash.com/otQ6orzFTlk/400x300'}
              alt=''
            />
            <Box margin={2}>
              <Box marginBottom={1}>
                <Typography variant='h5' component='h5'>
                  Souper Salad
                </Typography>
              </Box>
              <Box>
                <Typography variant='p' component='p' fontWeight='bold'>
                  $ - Healthy - Salads
                </Typography>
              </Box>
              <Box
                display='flex'
                justifyContent='space-around'
                marginTop={2}
                marginBottom={2}
              >
                <Box border='1px solid black' padding={1} borderRadius={5}>
                  <Typography variant='p' component='p' fontWeight='bold'>
                    30-45 Min
                  </Typography>
                </Box>
                <Box border='1px solid black' padding={1} borderRadius={5}>
                  <Typography variant='p' component='p' fontWeight='bold'>
                    $4.99 Delivery Fee
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box width={400}>
            <img
              src={'https://source.unsplash.com/6tj8WUbDxjk/400x300'}
              alt=''
            />
            <Box margin={2}>
              <Box marginBottom={1}>
                <Typography variant='h5' component='h5'>
                  Tim Hortons
                </Typography>
              </Box>
              <Box>
                <Typography variant='p' component='p' fontWeight='bold'>
                  $ - Cafe - Coffee $ Tea - Breakfast and Brunch
                </Typography>
              </Box>
              <Box
                display='flex'
                justifyContent='space-around'
                marginTop={2}
                marginBottom={2}
              >
                <Box border='1px solid black' padding={1} borderRadius={5}>
                  <Typography variant='p' component='p' fontWeight='bold'>
                    10-20 Min
                  </Typography>
                </Box>
                <Box border='1px solid black' padding={1} borderRadius={5}>
                  <Typography variant='p' component='p' fontWeight='bold'>
                    $3.99 Delivery Fee
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
