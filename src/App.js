import React from 'react';
import logo from './logo.svg';
import './App.css';
import ITSP from './ITSP';
import Navigation from './Navigation';
import Home from './Home';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div>
    <Navigation/>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/ITSP" component={ITSP} />
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
