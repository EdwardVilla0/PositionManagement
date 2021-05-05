import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Accounts from './components/Accounts/Accounts';
import Benefits from './components/Benefits/Benefits';
import Employees from './components/Employees/Employees';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Miscellaneous from './components/Miscellaneous/Miscellaneous';
import PositionControl from './components/PositionControl/PositionControl';
import Register from './components/Register/Register';
import Timesheets from './components/Timesheets/Timesheets';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
        }))
      } else {
        dispatch(logout());
      }
    })
  }, [])


  return (
    <Router>
      {!user ? (
        <>


          <div className="app">
            <Switch>
              <Route exact path="/" component={Login} />
              {/* <Login path="/login" /> */}

              <Route exact path="/register" component={Register} />

            </Switch>
          </div>


        </>
      ) : (
        <div className="app">
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/employees" exact>
              <Employees />
            </Route>
            <Route paht='/positioncontrol'>
              <PositionControl />
            </Route>
            <Route paht='/timesheets'>
              <Timesheets />
            </Route>
            <Route paht='/accounts'>
              <Accounts />
            </Route>
            <Route paht='/benefits'>
              <Benefits />
            </Route>
            <Route paht='/miscellaneous'>
              <Miscellaneous />
            </Route>
          </Switch>
          <Footer />

        </div>
      )}
    </Router>
  );
}

export default App;
