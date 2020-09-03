import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route path='/:book' component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
