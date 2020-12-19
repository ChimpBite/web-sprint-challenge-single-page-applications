import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Box,
  Typography,
  Grid,
  MenuItem,
  FormControl,
  FormControlLabel,
  Checkbox,
  Select,
  Radio,
  TextField,
  FormHelperText,
  Switch,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  row: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  rowdark: {
    padding: theme.spacing(2),
    backgroundColor: '#e0e0e0',
    color: theme.palette.text.secondary,
  },
  rowcustom: {
    paddingLeft: 15,
  },
  h2: {
    fontSize: '1.5rem',
    textAlign: 'center',
  },
  h3: {
    fontSize: '1.3rem',
  },
  p: {
    fontSize: '1rem',
  },
  img: {
    width: '100%',
    height: 300,
    backgroundImage: 'url(https://source.unsplash.com/oBbTc1VoT-0/600x300)',
    '@media (max-width:550px)': {
      height: 150,
      backgroundImage: 'url(https://source.unsplash.com/oBbTc1VoT-0/300x150)',
    },
  },
  formControl: {
    minWidth: '100%',
  },
  selectControl: {
    minWidth: '95%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    borderRadius: 10,
    backgroundColor: 'red',
    color: 'white',
    fontSize: '1.5rem',
    width: '100%',
    '@media (max-width:550px)': {
      marginTop: 10,
    },
  },

  boxflex: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'space-evenly',
    '@media (max-width:550px)': {
      flexDirection: 'column',
    },
  },
}));

const Pizza = (props) => {
  const classes = useStyles();

  let history = useHistory();
  const [form, setForm] = useState({
    Quantity: '1',
  });

  const handleCheckbox = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container maxWidth='sm'>
      <Box border='1px solid black'>
        <Box>
          <Typography className={classes.h2} variant='h2' component='h2'>
            Build Your Own Pizza
          </Typography>
          <Box className={classes.img}></Box>
        </Box>
        <Box className={classes.root}>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box className={classes.row}>
                  <Typography
                    className={classes.h3}
                    variant='h3'
                    component='h3'
                  >
                    Build Your Own Pizza
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className={classes.row}>
                  <input
                    data-test='name'
                    required
                    onChange={handleForm}
                    value={form.name}
                    type='text'
                    name='Name'
                    placeholder='Name'
                    min={2}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className={classes.rowdark}>
                  <Typography
                    className={classes.h3}
                    variant='h3'
                    component='h3'
                  >
                    Choice of Size
                  </Typography>
                  <Typography className={classes.p} variant='p' component='p'>
                    Required
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className={classes.rowcustom}>
                  <FormControl className={classes.selectControl}>
                    <Select
                      name='Size'
                      onChange={handleForm}
                      displayEmpty
                      className={classes.selectEmpty}
                      inputProps={{ 'aria-label': 'Without label' }}
                      border='1px solid black'
                    >
                      <FormHelperText>Select Size</FormHelperText>
                      <MenuItem value='Small'>Small</MenuItem>
                      <MenuItem value='Medium'>Medium</MenuItem>
                      <MenuItem value='Large'>Large</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className={classes.rowdark}>
                  <Typography
                    className={classes.h3}
                    variant='h3'
                    component='h3'
                  >
                    Choice of Sauce
                  </Typography>
                  <Typography className={classes.p} variant='p' component='p'>
                    Required
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  className={classes.rowcustom}
                  display='flex'
                  flexDirection='column'
                >
                  <FormControlLabel
                    value='Original Red'
                    name='Sauce'
                    id='original-red'
                    control={<Radio />}
                    onChange={handleForm}
                    label='Original Red'
                    checked={form.Sauce === 'Original Red'}
                  />
                  <FormControlLabel
                    value='Garlic Ranch'
                    name='Sauce'
                    id='garlic-ranch'
                    control={<Radio />}
                    onChange={handleForm}
                    label='Garlic Ranch'
                    checked={form.Sauce === 'Garlic Ranch'}
                  />
                  <FormControlLabel
                    value='BBQ Sauce'
                    name='Sauce'
                    id='bbqsauce'
                    control={<Radio />}
                    onChange={handleForm}
                    label='BBQ Sauce'
                    checked={form.Sauce === 'BBQ Sauce'}
                  />
                  <FormControlLabel
                    value='Spinach Alfredo'
                    name='Sauce'
                    id='spinach-alfredo'
                    control={<Radio />}
                    onChange={handleForm}
                    label='Spinach Alfredo'
                    checked={form.Sauce === 'Spinach Alfredo'}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className={classes.rowdark}>
                  <Typography
                    className={classes.h3}
                    variant='h3'
                    component='h3'
                  >
                    Add Toppings
                  </Typography>
                  <Typography className={classes.p} variant='p' component='p'>
                    Choose up to 10
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className={classes.rowcustom} display='flex'>
                  <Box display='flex' flexDirection='column'>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={form.Pepperoni === true}
                          onChange={handleCheckbox}
                          name='Pepperoni'
                          value='Pepperoni'
                        />
                      }
                      label='Pepperoni'
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={form.Sausage === true}
                          onChange={handleCheckbox}
                          name='Sausage'
                          value='Sausage'
                        />
                      }
                      label='Sausage'
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={form.Canadian_Bacon === true}
                          onChange={handleCheckbox}
                          name='Canadian_Bacon'
                          value='Canadian Bacon'
                        />
                      }
                      label='Canadian Bacon'
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={form.Spicy_Italian_Sausage === true}
                          onChange={handleCheckbox}
                          name='Spicy_Italian_Sausage'
                          value='Spicy Italian Sausage'
                        />
                      }
                      label='Spicy Italian Sausage'
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={form.Grilled_Chicken === true}
                          onChange={handleCheckbox}
                          name='Grilled_Chicken'
                          value='Grilled Chicken'
                        />
                      }
                      label='Grilled Chicken'
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={form.Onions === true}
                          onChange={handleCheckbox}
                          name='Onions'
                          value='Onions'
                        />
                      }
                      label='Onions'
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={form.Green_Peppers === true}
                          onChange={handleCheckbox}
                          name='Green_Peppers'
                          value='Green Peppers'
                        />
                      }
                      label='Green Peppers'
                    />
                  </Box>
                  <Box display='flex' flexDirection='column' marginLeft={3}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={form.Diced_Tomatos === true}
                          onChange={handleCheckbox}
                          name='Diced_Tomatos'
                          value='Diced Tomatos'
                        />
                      }
                      label='Diced Tomatos'
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={form.Black_Olives === true}
                          onChange={handleCheckbox}
                          name='Black_Olives'
                          value='Black Olives'
                        />
                      }
                      label='Black Olives'
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={form.Roasted_Garlic === true}
                          onChange={handleCheckbox}
                          name='Roasted_Garlic'
                          value='Roasted Garlic'
                        />
                      }
                      label='Roasted Garlic'
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={form.Artichoke_Hearts === true}
                          onChange={handleCheckbox}
                          name='Artichoke_Hearts'
                          value='Artichoke Hearts'
                        />
                      }
                      label='Artichoke Hearts'
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={form.Three_Cheese === true}
                          onChange={handleCheckbox}
                          name='Three_Cheese'
                          value='Three Cheese'
                        />
                      }
                      label='Three Cheese'
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={form.Pineapple === true}
                          onChange={handleCheckbox}
                          name='Pineapple'
                          value='Pineapple'
                        />
                      }
                      label='Pineapple'
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={form.Extra_Cheese === true}
                          onChange={handleCheckbox}
                          name='Extra_Cheese'
                          value='Extra Cheese'
                        />
                      }
                      label='Extra Cheese'
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className={classes.rowdark}>
                  <Typography
                    className={classes.h3}
                    variant='h3'
                    component='h3'
                  >
                    Choice of Substitute
                  </Typography>
                  <Typography className={classes.p} variant='p' component='p'>
                    Choose up to 1
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className={classes.row}>
                  <FormControlLabel
                    control={<Switch />}
                    label='Gluten Free Crust (+ $100)'
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className={classes.rowdark}>
                  <Typography
                    className={classes.h3}
                    variant='h3'
                    component='h3'
                  >
                    Special Instructions
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className={classes.row}>
                  <TextField
                    className={classes.formControl}
                    id='outlined-multiline-static'
                    multiline
                    rows={4}
                    defaultValue="Anything else you'd like to add?"
                    variant='outlined'
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className={classes.boxflex} border='1px solid black'>
                  <Box>
                    <TextField
                      className={classes.formControl}
                      id='outlined-number'
                      label='Quantity'
                      type='number'
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant='outlined'
                    />
                  </Box>
                  <Box>
                    <Button
                      className={classes.button}
                      id='submit'
                      onClick={(e) => {
                        e.preventDefault();
                        console.log(form);
                        props.setOrder(form);
                        history.push('/confirmation');
                      }}
                    >
                      Add to Order
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default Pizza;
