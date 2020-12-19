import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Header from './components/Header';
import Pizza from './components/Pizza';
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
        <Route path='/pizza'>
          <Pizza />
        </Route>
        <Footer />
      </Container>
    );
  }
}
export default App;
