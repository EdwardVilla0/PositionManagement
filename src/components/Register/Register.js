import React, { useState } from 'react'
import './Register.css'

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");

    return (
        <div className="register">
            <form>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Full Name (required if registering)" type="text" required />
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" required />
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" required />
                <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm Password" type="password" required />
                {/* <button type="submit" onClick={loginToApp}>Sign In</button> */}
                <button type="submit" >Sign In</button>
            </form>
        </div>
    )
}

export default Register
