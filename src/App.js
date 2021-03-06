import './scss/App.scss';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/1-Home';
import Calculator from './routes/2-Calculator';
import Quote from './routes/3-Quote';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/calculator">
        <Calculator />
      </Route>
      <Route exact path="/quote">
        <Quote />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
