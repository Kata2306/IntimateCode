import { useState } from "react";
import "./Cart.css";
import { NavLink } from "react-router-dom";

export default function Cart({cartItem}) {
  console.log(cartItem);
  console.log(cartItem.price);
  const [cartItems, setCartItems] = useState([]);
  if( cartItem !== null && cartItem !== undefined) {
    setCartItems([...cartItems, cartItem]);
  }
  /*
    [{
      id: 1,
      name: "Black lace bralette",
      price: 19.99,
      color: "black",
      brand: "Amorelie",
      category: "Bras",
      imageUrl:
        "https://www.hankypanky.com/cdn/shop/files/Hanky-Panky-Signature-Lace-Padded-Crossover-Bralette-Black-BLACK-View-1.jpg?v=1692906073",
      rating: 4.5,
      details: "sexy, tight-fit, comfy",
      productSize: {
        xs: 8,
        s: 12,
        m: 18,
        l: 15,
        xl: 6,
        xxl: 3,
        xxxl: 1,
      },
      quantity: 1,
      size: "l",
    },
    {
      id: 2,
      name: "Rose Petal Panties",
      price: 13.45,
      color: "pink",
      brand: "Intimissimi",
      category: "Panties",
      imageUrl:
        "https://eqomcdn.com/content/photos/products/obsessive/75070/1693912646.obs6480_9.jpg?w=720&q=90",
      rating: 4.2,
      details: "Elegant, versatile, durable",
      productSize: {
        xs: 8,
        s: 12,
        m: 8,
        l: 10,
        xl: 6,
        xxl: 3,
        xxxl: 2,
      },
      quantity: 1,
      size: "xs",
    },
    { id: 3, 
      name: "Sexy blue slip",
      price: 26.79,
      color: "blue",
      brand: "Fenty",
      category: "Panties",
      imageUrl:
        "https://eqomcdn.com/content/photos/products/christine-le-duc/69532/1684938265.cth010-blu-xss_3.jpg?w=720&q=90",
      rating: 4.7,
      details: "Smooth, breathable, lightweight",
      productSize: {
        xs: 1,
        s: 12,
        m: 1,
        l: 19,
        xl: 6,
        xxl: 2,
        xxxl: 5,
      },
      quantity: 3,
      size: "s",
    },
    {
      id: 4, 
      name: "Sexy pink slip",
      price: 26.79,
      color: "pink",
      brand: "Fenty",
      category: "Panties",
      imageUrl:
        "https://eqomcdn.com/content/photos/products/christine-le-duc/69529/1684937192.cth010-pnk-xss_3.jpg?w=720&q=90",
      rating: 4.1,
      details: "Supportive, flexible, sporty",
      productSize: {
        xs: 8,
        s: 12,
        m: 18,
        l: 15,
        xl: 6,
        xxl: 3,
        xxxl: 1,
      },
      quantity: 1,
      size: "m",
    },
  ]*/

  const subtotal = cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  );
  const isFreeDelivery = subtotal > 50;
  const deliveryCost = isFreeDelivery ? 0.0 : 4.99;
  const totalWithVAT = isFreeDelivery ? subtotal : subtotal + deliveryCost;

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    setCartItems(updatedCartItems);
  };

  const handleRemove = (name) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.name !== name
    );
    setCartItems(updatedCartItems);
  };

  const handleCheckout = () => {
    console.log("yay! these are your items: ");
    console.log(cartItems);
    console.log(" now pay us!! <3");
  }

  return (
    <><h1>CART ({cartItems.length > 1 ? cartItems.length + " Items" : cartItems.length + " Item"})</h1>
    <div className="cartPage">
        <div className="cartItems">
          {cartItems.map((cartItem, index) => {
            return (
              <div className="cartItem" key={index}>
                <NavLink to={`/product/${cartItem.id}`} className="cartItemLink">
                <img
                  className="cartItemImage"
                  src={cartItem.imageUrl}
                  alt={cartItem.name}
                />
                </NavLink>
                <div className="cartItemDetails">
                <NavLink to={`/product/${cartItem.id}`} className="cartItemLink">
                <div className="cartItemText">
                  <p className="textLighter">{cartItem.brand}</p>
                  <p className="textBolder">{cartItem.name}</p>

                  <p className="textBolder">€ {cartItem.price.toFixed(2)}</p>
                  <p className="textLighter">{cartItem.color}</p>
                  <p className="textLighter">Size: {cartItem.size.toUpperCase()}</p>
                  </div>
                  </NavLink>
                  <div className="cartItemButtons">
                    <select
                      className="cartItemSelectQuantity"
                      value={cartItem.quantity}
                      onChange={(e) =>
                        handleQuantityChange(index, parseInt(e.target.value))
                      }
                    >
                      {Array.from(
                        { length: cartItem.productSize[cartItem.size] },
                        (_, i) => (
                          <option key={i} value={i + 1}>
                            {i + 1}
                          </option>
                        )
                      )}
                    </select>
                    <button className="removeItemButton" onClick={() => handleRemove(cartItem.name)}>
                      Remove
                    </button>
                  </div>
                </div>
                <div className="cartItemTotal">
                  <p> {(cartItem.price * cartItem.quantity).toFixed(2)} €</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart">
          <p className="textBoldest">TOTAL</p>
          <><div className="text"><p className="textLighter">Subtotal: </p><p className="textLighter">{subtotal.toFixed(2)} €</p></div>
          <div className="text"><p className="textLighter">Delivery: </p><p className="textLighter">{deliveryCost.toFixed(2)} €</p></div>
          <hr className="line"/>
          <div className="text"><p className="textBolder">Total (VAT included): </p><p className="textBolder">{totalWithVAT.toFixed(2)} €</p></div>
          </>
          <button className="checkoutButton" onClick={()=> handleCheckout()}>GO TO CHECKOUT</button>
        </div>
      </div></>
  );
}
