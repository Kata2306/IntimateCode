// TO DO: Figure out what data will be added to cart?!

import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MainLayout from "../../layout/MainLayout";
import { fetchProduct } from "../../api/fetchProduct";
import "./ProductPage.css";
import StarRating from "../../components/starRating/StarRating";

export default function ProductPage(props) {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [productToCart, setProductToCart] = useState({});
  const [size, setSize] = useState(null);

  function handleSizeClick(size) {
    console.log(`Size ${size} clicked`);
    setSize(size);
  }

  function handleHasASize() {
    size !== null
      ? setProductToCart({ ...product, size: size })
      : console.log("choose a size!!");
  }


  function handleAddToCart() {
    handleHasASize();
    props.handleSendData(productToCart); 
  }

  console.log(productToCart);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProduct(productId);
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <MainLayout>
      <div className="productPage">
        <img
          className="productPage img"
          src={product.imageUrl}
          alt={product.name}
        />
        <div className="productPageInfo">
          <StarRating productRating={product.rating} userType="loggedIn"/>
          <h3>{product.brand}</h3>
          <h2>{product.name}</h2>
          <h1>€ {product.price}</h1>
          <h4>{product.color}</h4>
          <div>
            <h4>Available Sizes:</h4>
            {Object.keys(product.productSize)
              .filter((size) => size !== "id")
              .map((size) =>
                product.productSize[size] !== 0 ? (
                  <button
                    key={size}
                    className="sizeButton"
                    id={size}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </button>
                ) : (
                  <button
                    key={size}
                    style={{ pointerEvents: "none", opacity: 0.5 }}
                    className="sizeButton"
                    id={size}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </button>
                )
              )}
          </div>
          
          <button className="addToCartButton" onClick={() => handleAddToCart()}>
            Add to cart
          </button>
          
          <div
            className="productDetails"
            onClick={() =>
              detailsVisible
                ? setDetailsVisible(false)
                : setDetailsVisible(true)
            }
          >
            <h4>Product details</h4>
            <h4>﹀</h4>
          </div>
          {detailsVisible && <p>{product.details}</p>}
        </div>
      </div>
    </MainLayout>
  );
}
