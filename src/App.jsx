import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { ContactDetailsPage } from './pages/ContactDetailsPage'
import {ContactEditPage} from './pages/ContactEditPage'

import { NavBar } from './components/NavBar'

function App(props) {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contact/:id" component={ContactDetailsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/edit/:id?" component={ContactEditPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
