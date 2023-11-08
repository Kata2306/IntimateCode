import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/header/Header";

import { fetchDataFromBackend } from "./api";
import ProductsDisplay from "./components/productsDisplay/ProductsDisplay";
import Filterbar from "./components/navbar/filterbar/filterbar/Filterbar";
import Filters from "./components/navbar/filterbar/filters/Filters";
import ColorFilter from "./components/navbar/filterbar/colorFilter/ColorFilter";
import BrandFilter from "./components/navbar/filterbar/brandFilter/BrandFilter";
import ProductTypeFilter from "./components/navbar/filterbar/productTypeFilter/ProductTypeFilter";
import NavBar from "./components/navbar/NavBar";

function App() {
  //for Filters
  const [filter, setFilter] = useState("inactive");
  // end Filters
  // for ColorFilter
  const [selectedColors, setSelectedColors] = useState([]);

  // Define a callback function to receive the picked colors
  const handleColorSelection = (pickedColors) => {
    setSelectedColors(pickedColors);
  };
  // end ColorFilter

  // for BrandFilter
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [products, setProducts] = useState([]);

  const handleBrandSelection = (pickedBrands) => {
    setSelectedBrands(pickedBrands);
  };
  // end BrandFilter

  // for TypeFilter
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleTypeSelection = (pickedTypes) => {
    setSelectedTypes(pickedTypes);
  };
  // end TypeFilter

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

  return (
    <div className="App">
      <Header />
      <NavBar />
      <ProductsDisplay products={{products}} />
    </div>
  );
}

export default App;