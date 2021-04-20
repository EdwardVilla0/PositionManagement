import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="app">
      <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
