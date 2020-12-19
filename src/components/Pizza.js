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
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Pizza = (props) => {
  const classes = useStyles();

  let history = useHistory();
  const [form, setForm] = useState({
    name: '',
    sauce: 'Original Red',
    quantity: '1',
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
      <Box>
        <Typography className={classes.h2} variant='h2' component='h2'>
          Build Your Own Pizza
        </Typography>
        <Box className={classes.img}></Box>
      </Box>
      <Box className={classes.root}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(form);
            props.setOrder(form);
            history.push('/confirmation');
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box className={classes.row}>
                <Typography className={classes.h3} variant='h3' component='h3'>
                  Build Your Own Pizza
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={classes.row}>
                <TextField
                  className={classes.formControl}
                  id='standard-basic'
                  label='Name'
                  onChange={handleForm}
                  value={form.name}
                  placeholder='Name'
                  min={2}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={classes.rowdark}>
                <Typography className={classes.h3} variant='h3' component='h3'>
                  Choice of Size
                </Typography>
                <Typography className={classes.p} variant='p' component='p'>
                  Required
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={classes.rowcustom}>
                <FormControl className={classes.formControl}>
                  <Select
                    name='size'
                    onChange={handleForm}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <FormHelperText>Select Size</FormHelperText>
                    <MenuItem value='small'>Small</MenuItem>
                    <MenuItem value='medium'>Medium</MenuItem>
                    <MenuItem value='larger'>Large</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={classes.rowdark}>
                <Typography className={classes.h3} variant='h3' component='h3'>
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
                  value='originalred'
                  name='sauce'
                  id='original-red'
                  control={<Radio />}
                  onChange={handleForm}
                  label='Original Red'
                  checked={form.sauce === 'originalred'}
                />
                <FormControlLabel
                  value='garlicranch'
                  name='sauce'
                  id='garlic-ranch'
                  control={<Radio />}
                  onChange={handleForm}
                  label='Garlic Ranch'
                  checked={form.sauce === 'garlicranch'}
                />
                <FormControlLabel
                  value='bbqsauce'
                  name='sauce'
                  id='bbqsauce'
                  control={<Radio />}
                  onChange={handleForm}
                  label='BBQ Sauce'
                  checked={form.sauce === 'bbqsauce'}
                />
                <FormControlLabel
                  value='spinachalfredo'
                  name='sauce'
                  id='spinach-alfredo'
                  control={<Radio />}
                  onChange={handleForm}
                  label='Spinach Alfredo'
                  checked={form.sauce === 'spinachalfredo'}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={classes.rowdark}>
                <Typography className={classes.h3} variant='h3' component='h3'>
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
                        checked={form.pepperoni === true}
                        onChange={handleCheckbox}
                        name='pepperoni'
                        value='pepperoni'
                      />
                    }
                    label='Pepperoni'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.sausage === true}
                        onChange={handleCheckbox}
                        name='sausage'
                        value='sausage'
                      />
                    }
                    label='Sausage'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.canadian === true}
                        onChange={handleCheckbox}
                        name='canadian'
                        value='canadian'
                      />
                    }
                    label='Canadian Bacon'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.spicyitaliansausage === true}
                        onChange={handleCheckbox}
                        name='spicyitaliansausage'
                        value='spicyitaliansausage'
                      />
                    }
                    label='Spicy Italian Sausage'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.grilledchicken === true}
                        onChange={handleCheckbox}
                        name='grilledchicken'
                        value='grilledchicken'
                      />
                    }
                    label='Grilled Chicken'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.onions === true}
                        onChange={handleCheckbox}
                        name='onions'
                        value='onions'
                      />
                    }
                    label='Onions'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.greenpepper === true}
                        onChange={handleCheckbox}
                        name='greenpeppers'
                        value='greenpeppers'
                      />
                    }
                    label='Green Peppers'
                  />
                </Box>
                <Box display='flex' flexDirection='column' marginLeft={3}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.dicedtomatos === true}
                        onChange={handleCheckbox}
                        name='dicedtomatos'
                        value='dicedtomatos'
                      />
                    }
                    label='Siced Tomatos'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.blackolives === true}
                        onChange={handleCheckbox}
                        name='blackolives'
                        value='blackolives'
                      />
                    }
                    label='Black Olives'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.roastedgarlic === true}
                        onChange={handleCheckbox}
                        name='roastedgarlic'
                        value='roastedgarlic'
                      />
                    }
                    label='Roasted Garlic'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.artichokehearts === true}
                        onChange={handleCheckbox}
                        name='artichokehearts'
                        value='artichokehearts'
                      />
                    }
                    label='Artichoke Hearts'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.threecheese === true}
                        onChange={handleCheckbox}
                        name='threecheese'
                        value='threecheese'
                      />
                    }
                    label='Three Cheese'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.pineapple === true}
                        onChange={handleCheckbox}
                        name='pineapple'
                        value='pineapple'
                      />
                    }
                    label='Pineapple'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.extracheese === true}
                        onChange={handleCheckbox}
                        name='extracheese'
                        value='extracheese'
                      />
                    }
                    label='Extra Cheese'
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={classes.rowdark}>
                <Typography className={classes.h3} variant='h3' component='h3'>
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
                <Typography className={classes.h3} variant='h3' component='h3'>
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
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default Pizza;
