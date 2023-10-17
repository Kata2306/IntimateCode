import "./Header.css";
import CartButton from "./CartButton.jsx";

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
            <img src="https://img.freepik.com/premium-vector/women-lingerie-pink-body-corset-fashion-concept_277625-1447.jpg?w=2000" alt="logo"></img>
                <div>
                <h1>IntimateCode</h1>
                <h2>"Code Your Imagination, Create Reality"</h2>
                </div>
            </div>
            <div className="header-buttons">
            <button className="loginButton"><p className="loginButtonIcon">👤</p></button>
            <CartButton />
            </div>
        </div>
    )
}