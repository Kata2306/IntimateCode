import { useState } from "react";
import "./NavBar.css";
import Filters from "./filterbar/filters/Filters";
import SearchBar from "./searchBar/SearchBar";
import SortBar from "./sortbar/SortBar";

export default function NavBar(props) {
  // for BrandFilter
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleBrandSelection = (pickedBrands) => {
    setSelectedBrands(pickedBrands);
    props.onBrandSelect(pickedBrands);
  };
  // end BrandFilter

  // for ColorFilter
  const [selectedColors, setSelectedColors] = useState([]);

  // Define a callback function to receive the picked colors
  const handleColorSelection = (pickedColors) => {
    setSelectedColors(pickedColors);
    props.onColorSelect(pickedColors);
  };
  // end ColorFilter

  // for TypeFilter
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleTypeSelection = (pickedTypes) => {
    setSelectedTypes(pickedTypes);
    props.onTypeSelect(pickedTypes);
  };
  // end TypeFilter

  const handleSort = (pickedSort) => {
    props.onSort(pickedSort);
  }

  const handleSearch = (pickedLetter) => {
    props.onSearch(pickedLetter);
  }

  return (
    <div className="navBar">
      <div className="navBarLeft">
        <SortBar 
        onSort={handleSort}/>
        <Filters
          filteredProducts={props.filteredProducts}
          onBrandSelect={handleBrandSelection}
          onColorSelect={handleColorSelection}
          onTypeSelect={handleTypeSelection}
        />
      </div>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}
