import React, { useState } from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  Select,
  FormControl,
  Radio,
  MenuItem,
  FormControlLabel,
  RadioGroup,
  Checkbox,
  FormGroup,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  img: {
    width: '100%',
    height: 350,
    backgroundImage: 'url(https://source.unsplash.com/UxRhrU8fPHQ/1000x900)',
    backgroundRepeat: 'no-repeat',
  },
  formControl: {
    width: '60%',
  },
  selectEmpty: {},
}));

const Form = () => {
  const classes = useStyles();
  const [size, setSize] = useState('');
  const [value, setValue] = useState('originalred');
  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setSize(event.target.value);
    setValue(event.target.value);
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;

  return (
    <Container>
      <Box display='flex' justifyContent='center'>
        <Box
          marginTop={2}
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          width='60%'
        >
          <Box>
            <Typography variant='h6' component='h6'>
              Build Your Own Pizza
            </Typography>
          </Box>
          <Box className={classes.img}></Box>
          <Box width='90%' marginTop={3} height={50} padding={1}>
            <Typography variant='h5' component='h5'>
              Build Your Own Pizza
            </Typography>
          </Box>
          <Box width='90%' height={50} bgcolor='#e0e0e0' padding={1}>
            <Typography variant='h5' component='h5'>
              Choice of Size
            </Typography>
            <Typography variant='p' component='p'>
              Required
            </Typography>
          </Box>

          <Box width='90%' height={50} padding={1}>
            <FormControl className={classes.formControl}>
              <Select
                value={size}
                onChange={handleChange}
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Small</MenuItem>
                <MenuItem value={20}>Medium</MenuItem>
                <MenuItem value={30}>Large</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box width='90%' height={50} bgcolor='#e0e0e0' padding={1}>
            <Typography variant='h5' component='h5'>
              Choice of Sauce
            </Typography>
            <Typography variant='p' component='p'>
              Required
            </Typography>
          </Box>
          <Box width='90%' height={50} padding={1}>
            <FormControl component='fieldset'>
              <RadioGroup
                aria-label='sauce'
                name='sauce'
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value='originalred'
                  control={<Radio />}
                  label='Original Red'
                />
                <FormControlLabel
                  value='garlicranch'
                  control={<Radio />}
                  label='Garlic Ranch'
                />
                <FormControlLabel
                  value='bbqsauce'
                  control={<Radio />}
                  label='BBQ Sauce'
                />
                <FormControlLabel
                  value='spinachalfredo'
                  control={<Radio />}
                  label='Spinach Alfredo'
                />
              </RadioGroup>
            </FormControl>
            <Box width='90%' height={50} bgcolor='#e0e0e0' padding={1}>
              <Typography variant='h5' component='h5'>
                Add Toppings
              </Typography>
              <Typography variant='p' component='p'>
                Choose up to 10.
              </Typography>
            </Box>
            <Box>
              <FormControl component='fieldset' className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={gilad}
                        onChange={handleChange}
                        name='gilad'
                      />
                    }
                    label='Gilad Gray'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={jason}
                        onChange={handleChange}
                        name='jason'
                      />
                    }
                    label='Jason Killian'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={antoine}
                        onChange={handleChange}
                        name='antoine'
                      />
                    }
                    label='Antoine Llorca'
                  />
                </FormGroup>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Form;
