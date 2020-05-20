import React from 'react';
import './App.css';

import Home from './Components/Home/Home'
import Signup from './Components/Auth/Signup/Signup'
import Login from './Components/Auth/Login/Login'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { AuthProvider } from "./Components/Auth/Auth/Auth"
import PrivateRoute from './PrivateRoute'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <PrivateRoute exact path="/" component={Home} />
          </Switch>
        </div>     
      </Router>
    </AuthProvider>
  );
}

export default App;
