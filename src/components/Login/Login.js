
import React, { useState } from 'react';
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';
import './Login.css';
import { login } from '../../features/userSlice';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();


    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                }))
            })
            .catch(error => alert(error));

    };


    return (
        <div className="login">


            <form>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" required />
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
                <button type="submit" onClick={loginToApp}>Sign In</button>
                {/* <button type="submit" >Sign In</button> */}
            </form>

            <p className="register__member">Not a member?
                <Router>
                    <Link className="login__register" to="/register">Register Now</Link>
                </Router>
            </p>

        </div>
    )
}

export default Login
