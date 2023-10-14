import "./SingleProduct.css";
import CartButton from "./CartButton.jsx";

export default function SingleProduct(props) {
    return (
        <div className="singleProduct">
            <img className="singleProduct-image" src={props.imgLink} alt={props.product}></img>
            <div className="singleProduct-underImage">
                <div>
                    <p>{props.product}</p>
                    <p>{props.price}</p>
                </div>
                <CartButton onClick={props.onClickCartButton}/>
            </div>
        </div>
    )
}