import "./SingleProduct.css";

export default function SingleProduct(props) {
    return (
        <div className="singleProduct">
            <img className="singleProduct-image" src={props.imgLink} alt={props.product}></img>
            <p>{props.product}</p>
            <p>{props.price}</p>
        </div>
    )
}