import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './Components/Home/Home'
import Signup from './Components/Auth/Signup/Signup'
import Login from './Components/Auth/Login/Login'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign-Up</Link>
            </li>
          </ul>
        </nav>

        <Switch>
        <Route path="/login">
            <Login />
          </Route>
        <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>     
    </Router>
  );
}

export default App;
