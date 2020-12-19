import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Header from './components/Header';
import Form from './components/Form';
import Home from './components/Home';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/form'>
          <Form />
        </Route>
        <Footer />
      </Container>
    );
  }
}

export default App;
