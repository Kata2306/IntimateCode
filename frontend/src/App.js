import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header";
import ProductsDisplay from "./components/productsDisplay/ProductsDisplay";
import BrandFilter from "./components/navbar/filterbar/brandFilter/BrandFilter";
import ColorFilter from "./components/navbar/filterbar/colorFilter/ColorFilter";
import Filterbar from "./components/navbar/filterbar/filterbar/Filterbar";
import Filters from "./components/navbar/filterbar/filters/Filters";
import ProductTypeFilter from "./components/navbar/filterbar/productTypeFilter/ProductTypeFilter";
import SearchBar from "./components/navbar/searchBar/SearchBar";
import SortBar from "./components/navbar/sortbar/SortBar";
import NavBar from "./components/navbar/NavBar";

function App() {

  return (
    <div className="App">
      <Header />
      <NavBar />
      <ProductsDisplay />
    </div>
  );
}

export default App;
