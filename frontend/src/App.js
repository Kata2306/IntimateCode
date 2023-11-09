import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/header/Header";

import { fetchDataFromBackend } from "./api";
//import ProductsDisplay from "./components/productsDisplay/ProductsDisplay";
import ProductPage from "./pages/productPage/ProductPage";
import NavBar from "./components/navbar/NavBar";
import ProductPage from "./pages/productPage/ProductPage";

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromBackend();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(products[0]);

  return (
    <div className="App">
      <Header />
      <NavBar />
      {/* <ProductsDisplay products={{products}} /> */}
      <ProductPage products={{products}} />
      {/* {products[0] && <ProductPage product={products[9]} />} */}
    </div>
  );
}

export default App;