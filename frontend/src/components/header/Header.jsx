import "./Header.css";
import CartButton from "../cartButton/CartButton.jsx";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <NavLink to="/" className="logo" >
            <img src="https://img.freepik.com/premium-vector/women-lingerie-pink-body-corset-fashion-concept_277625-1447.jpg?w=2000" alt="logo"></img>
                <div>
                <h1>IntimateCode</h1>
                <h2>"Code Your Imagination, Create Reality"</h2>
                </div>
            </NavLink>
            <div className="header-buttons">
            <button className="loginButton"><p className="loginButtonIcon">👤</p></button>
            <CartButton />
            </div>
        </div>
    )
}