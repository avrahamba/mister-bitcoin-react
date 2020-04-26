import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { userService } from './services/UserService'

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ContactDetailsPage from './pages/ContactDetailsPage'
import ContactEditPage from './pages/ContactEditPage'
import SignupPage from './pages/SignupPage'
import StatisticPage from './pages/StatisticPage'

import { NavBar } from './components/NavBar'

function App() {
const [,setUser] =  useState(null)
  const signupHelnder = _ => {
    setUser()
  }

  return (
    <div className="App">
      {
        userService.isConnected() ? (
          <Router>
            <NavBar></NavBar>
            <Switch>
              <Route exact path="/mister-bitcoin-react" component={HomePage} />
              <Route path="/mister-bitcoin-react/contact/:id" component={ContactDetailsPage} />
              <Route path="/mister-bitcoin-react/contact" component={ContactPage} />
              <Route path="/mister-bitcoin-react/edit/:id?" component={ContactEditPage} />
              <Route path="/mister-bitcoin-react/statistic" component={StatisticPage} />
            </Switch>
          </Router>
        ) : <SignupPage signup={signupHelnder} />
      }
    </div>
  );
}

export default App;
