import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
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



          <Switch>
            <Route exact path="/" component={Login} />
            {/* <Login path="/login" /> */}

            <Route exact path="/register" component={Register} />

          </Switch>

        </>
      ) : (
        <div className="app">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>

        </div>
      )}
    </Router>
  );
}

export default App;
