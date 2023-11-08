import { useEffect, useState } from "react";
import SingleProduct from "../singleProduct/SingleProduct";
import "./ProductsDisplay.css";

export default function ProductsDisplay({ products }) {
  console.log(products.products);
  
  const [cart, setCart] = useState({});

  const addToCart = (productId) => {
    if (cart[productId]) {
      setCart({
        ...cart,
        [productId]: cart[productId] + 1,
      });
    } else {
      setCart({
        ...cart,
        [productId]: 1,
      });
    }
  };

  console.log(cart);

  return (
    <div className="productsDisplay">
      {products.products.map((product) => (
        <SingleProduct
          key={product.id}
          price={product.price}
          product={product.name}
          imgLink={product.imageUrl}
          id={product.id}
          onClickCartButton={() => addToCart(product.id)}
        />
      ))}
    </div>
  );
}
