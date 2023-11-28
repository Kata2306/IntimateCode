import { Link } from "react-router-dom";
import "./Login.css";
import { useEffect, useState } from "react";
import fetchToken from "../../api/fetchToken";

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [user, setUser] = useState();

    const handleSignIn = () => {
        email !== "" && password !== "" ? setUser({"username" : email, "password" : password}) : console.log("pls enter better");
    }


    const [showEmailLabel, setShowEmailLabel] = useState(false);

    const handleEmail = (e) => {
        console.log(e.target.value);
        e.target.value === "" ? setShowEmailLabel(false) : setShowEmailLabel(true);
        setEmail(e.target.value);
    }

    const [showPasswordLabel, setShowPasswordLabel] = useState(false);

    const handlePassword = (e) => {
        console.log(e.target.value);
        e.target.value === "" ? setShowPasswordLabel(false) : setShowPasswordLabel(true);
        setPassword(e.target.value);
    }


    useEffect(() => {
        const getUserToken = async () => {
          try {
            const tokenData = await fetchToken(user);
            console.log('Token data:', tokenData);
          } catch (error) {
            console.error('Error fetching token:', error);
          }
        };
    
        // Call the function to fetch the token when the component mounts
        getUserToken();
      }, [user]); 

      console.log(user);


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
            <button className="signInButton" onClick={handleSignIn}>SIGN IN</button>
            <p>Don't have an account? <Link>Create an account</Link></p>
        </div>
    )
}