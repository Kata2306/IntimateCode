import { Link } from "react-router-dom";
import "./Login.css";
import { useEffect, useState } from "react";
import fetchToken from "../../api/fetchToken";

export default function Login(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState({ username: "", password: "" });
  const [token, setToken] = useState("");
  const [warnEmptyPassword, setWarnEmptyPassword] = useState(false);
  const [warnEmptyUsername, setWarnEmptyUsername] = useState(false);
  const [warnWrongLoginData, setWarnWrongLoginData] = useState(false);


  const handleSignIn = () => {
    username !== "" && password !== ""? setUser({ username: username, password: password }):
    username === undefined || username === "" ? setWarnEmptyUsername(true) : setWarnEmptyUsername(false);
    password === undefined || password === ""  ? setWarnEmptyPassword(true) : setWarnEmptyPassword(false);
  };

  const [showUsernameLabel, setShowUsernameLabel] = useState(false);

  const handleUsername = (e) => {
    e.target.value === "" ? setShowUsernameLabel(false) : setShowUsernameLabel(true);
    setUsername(e.target.value);
  };

  const [showPasswordLabel, setShowPasswordLabel] = useState(false);

  const handlePassword = (e) => {
    e.target.value === ""
      ? setShowPasswordLabel(false)
      : setShowPasswordLabel(true);
    setPassword(e.target.value);
  };

  useEffect(() => {
    const getUserToken = async () => {
      try {
        if (user.username !== "" && user.password !== "" && username !== undefined && password !== undefined) {
          const tokenData = await fetchToken(user);
          if (tokenData.username !== null && tokenData.jwt !== "") {
            setToken(tokenData.jwt);
            localStorage.setItem("jwt", tokenData.jwt);
            props.handleRedirect();
          } else {
            setWarnWrongLoginData(true);
          }
        }
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };

    // Call the function to fetch the token when the component mounts
    getUserToken();
  }, [user]);

  useEffect(() => {
    console.log(token);
    if (token !== "") {
      const handleUserRequest = async () => {
        try {
          const res = await fetch("http://localhost:8080/user/", {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });

          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }

          const data = await res.text();
        } catch (error) {
          console.error("Error handling user request:", error);
        }
      };
      handleUserRequest();
    }
  }, [token]);

  return (
    <div className="login">
      <h2>Sign In</h2>
      <div className="loginInputs">
        <div className="loginInputAndLabel">
          <label>{showUsernameLabel && "Username"}</label>
          <input
            className="loginInput"
            type="text"
            placeholder="username"
            onChange={handleUsername}
          ></input>
          <label className="warning">{warnEmptyUsername && "Please enter a username"}</label>
        </div>
        <div className="loginInputAndLabel">
          {showPasswordLabel && <label>Password</label>}
          <input
            className="loginInput"
            type="password"
            placeholder="password"
            onChange={handlePassword}
          ></input>
          {warnEmptyPassword && <label className="warning">Please enter a password.</label>}
        </div>
      </div>
      {warnWrongLoginData && <p className="warning">Wrong email or password, please try again.</p>}
      <button className="signInButton" onClick={handleSignIn}>
        SIGN IN
      </button>
      <p>
        Don't have an account? <Link>Create an account</Link>
      </p>
    </div>
  );
}
