import { useEffect, useState } from "react";
import SingleProduct from "../singleProduct/SingleProduct";
import "./ProductsDisplay.css";
//import fetchProducts from "../api/fetchProducts.js";

export default function ProductsDisplay({ products }) {
  console.log(products.products);

  return (
    <div className="productsDisplay">
      {products.products.map((product) => (
        <SingleProduct
          key={product.id}
          price={product.price}
          product={product.name}
          imgLink={product.imageUrl}
          onClickCartButton={() => console.log("buy me <3")}
        />
      ))}
    </div>
  );
}
