import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
  let x = false;
  return (
    <Router>

      {!x ? (
        <Login />
      ) : (
        <div className="app">


          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route />
          </Switch>


        </div>
      )}
    </Router>
  );
}

export default App;
