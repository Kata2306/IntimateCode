import "./CartButton.css"

export default function CartButton(props) {
    return (
        <div>
            <button className="cartButton" onClick={props.onClick}>🛒</button>
        </div>
    )
}