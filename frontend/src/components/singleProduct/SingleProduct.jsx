import "./SingleProduct.css";
import CartButton from "../cartButton/CartButton.jsx";
import { NavLink } from "react-router-dom";

export default function SingleProduct(props) {
    return (
        <NavLink to={`/product/${props.id}`} className="singleProduct">
            <img className="singleProduct-image" src={props.imgLink} alt={props.product}></img>
            <div className="singleProduct-underImage">
                <div>
                    <p>{props.product}</p>
                    <p>{props.price}</p>
                </div>
                <CartButton onClick={props.onClickCartButton}/>
            </div>
        </NavLink>
    )
}