import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase';
import { login } from '../../features/userSlice'
import './Register.css'
import { BrowserRouter as Router, Link } from "react-router-dom";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const dispatch = useDispatch();

    function refreshPage() {
        setTimeout(() => {
            window.location.reload(false);
        }, 500);
        console.log('page to reload')
    }
    const registerToApp = (e) => {
        e.preventDefault();
        console.log("testing")
        if (!firstName || !lastName) {
            return alert("You must enter a name!")
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: firstName
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: firstName
                        }))
                    })
            }).catch((err) => alert(err.message))
    }


    return (
        <div className="register">
            <form>
                <input value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" type="text" required />
                <input value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" type="text" required />
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" required />
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" required />
                <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm Password" type="password" required />
                <button type="submit" onClick={registerToApp}>Sign In</button>
            </form>

            <p className="register__backToLogin">Back to
                <Router>
                    <Link className="login__register" to={{ pathname: "/" }} onClick={refreshPage}> login?</Link>
                </Router>
            </p>
        </div>
    )
}

export default Register
