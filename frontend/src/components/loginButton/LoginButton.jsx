import { NavLink } from "react-router-dom";
import "./LoginButton.css";

export default function LoginButton() {
  return (
    <NavLink to="/login" className="loginButton">
      <button className="loginButtonIcon">🥰</button>
    </NavLink>
  );
}
