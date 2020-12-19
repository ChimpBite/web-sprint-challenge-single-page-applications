import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Header from './components/Header';
import Pizza from './components/Pizza';
import Home from './components/Home';
import Footer from './components/Footer';
import Confirmation from './components/Confirmation';

const App = () => {
  const [order, setOrder] = useState({});
  return (
    <Container>
      <Header />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/pizza' component={() => <Pizza setOrder={setOrder} />} />
      <Route
        path='/confirmation'
        component={() => <Confirmation order={order} />}
      />
      <Footer />
    </Container>
  );
};
export default App;
