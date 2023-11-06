import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import ProductsDisplay from "./components/productsDisplay/ProductsDisplay";
import BrandFilter from "./components/filterbar/brandFilter/BrandFilter";
import ColorFilter from "./components/filterbar/colorFilter/ColorFilter";
import Filterbar from "./components/filterbar/filterbar/Filterbar";
import Filters from "./components/filterbar/filters/Filters";
import ProductTypeFilter from "./components/filterbar/productTypeFilter/ProductTypeFilter";
import { fetchDataFromBackend } from "./api";

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
      <Filters HandleFilterButton={() => setFilter("active")} />
      {filter === "active" && (
        <Filterbar
          handleCloseFilterbar={() => setFilter("inactive")}
          handleFilterbarItemColor={() => setFilter("activeColor")}
          handleFilterbarItemBrand={() => setFilter("activeBrand")}
          handleFilterbarItemType={() => setFilter("activeType")}
        />
      )}
      {filter === "activeColor" && (
        <ColorFilter
          handleCloseFilterbar={() => setFilter("inactive")}
          handleBackButton={() => setFilter("active")}
          onColorSelect={handleColorSelection}
        />
      )}
      {filter === "activeBrand" && (
        <BrandFilter
          handleCloseFilterbar={() => setFilter("inactive")}
          handleBackButton={() => setFilter("active")}
          onBrandSelect={handleBrandSelection}
        />
      )}

      {filter === "activeType" && (
        <ProductTypeFilter
          handleCloseFilterbar={() => setFilter("inactive")}
          handleBackButton={() => setFilter("active")}
          onTypeSelect={handleTypeSelection}
        />
      )}
      <ProductsDisplay products={{products}} />
    </div>
  );
}

export default App;
