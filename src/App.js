import React from 'react';
import { Container } from '@material-ui/core';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <Container>
      <Header />
      <Home />
    </Container>
  );
};
export default App;
