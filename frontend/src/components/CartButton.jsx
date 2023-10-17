import "./CartButton.css"

export default function CartButton(props) {
    return (
            <button className="cartButton" onClick={props.onClick}>🛒</button>
    )
}