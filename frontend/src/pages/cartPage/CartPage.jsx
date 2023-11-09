import { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import "./CartPage.css";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
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
    {
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
  ]);

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

  return (
    <MainLayout>
      <div className="cartPage">
        {cartItems.map((cartItem, index) => {
          return (
            <div className="cartItem" key={index}>
              <img
                className="cartItemImage"
                src={cartItem.imageUrl}
                alt={cartItem.name}
              />
              <div className="cartItemText">
                <p>{cartItem.brand}</p>
                <p>{cartItem.name}</p>
                <p>{cartItem.price}</p>
                <p>{cartItem.color}</p>
                <p>{cartItem.size}</p>
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
                <button>Remove</button>
              </div>
              <p>Total: {cartItem.price * cartItem.quantity}</p>
            </div>
          );
        })}
        <div className="cart">
          <p>TOTAL</p>
          <p>Subtotal: {subtotal}</p>
          <p>Delivery: {deliveryCost}</p>
          <p>Total (VAT included): {totalWithVAT}</p>
          <button>GO TO CHECKOUT</button>
        </div>
      </div>
    </MainLayout>
  );
}
