import { NavLink } from "react-router-dom";
import "./CartButton.css";

export default function CartButton(props) {
  return (
    <NavLink to="/cart" className="cartButton">
      <button className="cartButtonIcon" onClick={props.onClick}>
        🛒
      </button>
    </NavLink>
  );
}
