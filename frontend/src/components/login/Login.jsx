import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";

export default function Login() {
    const [showEmailLabel, setShowEmailLabel] = useState(false);
    const handleEmail = (e) => {
        console.log(e.target.value);
        e.target.value === "" ? setShowEmailLabel(false) : setShowEmailLabel(true);
    }

    const [showPasswordLabel, setShowPasswordLabel] = useState(false);
    const handlePassword = (e) => {
        console.log(e.target.value);
        e.target.value === "" ? setShowPasswordLabel(false) : setShowPasswordLabel(true);
    }

    return (
        <div className="login">
            <h2>Sign In</h2>
            <div className="loginInputs">
            <div className="loginInputAndLabel">
            <label>{showEmailLabel && "E-mail"}</label>
            <input className="loginInput" type="text" placeholder="email" onChange={handleEmail}></input>
            </div>
            <div className="loginInputAndLabel">
            {showPasswordLabel && <label>Password</label>}
            <input className="loginInput" type="password" placeholder="password" onChange={handlePassword}></input>
            </div>
            </div>
            <button className="signInButton">SIGN IN</button>
            <p>Don't have an account? <Link>Create an account</Link></p>
        </div>
    )
}