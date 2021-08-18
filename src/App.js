/* eslint-disable */

import './App.scss';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/Home';
import Calculator from './routes/Calculator';
import Quote from './routes/Quote';

const App = () => (
  <BrowserRouter>
    <div className="App">
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
    </div>
  </BrowserRouter>
);

export default App;
