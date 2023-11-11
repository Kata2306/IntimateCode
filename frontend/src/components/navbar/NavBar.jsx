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

  console.log(selectedBrands);

  return (
    <div className="navBar">
      <div className="navBarLeft">
        <SortBar />
        <Filters onBrandSelect={handleBrandSelection} />
      </div>
      <SearchBar handleChange={(e) => console.log(e.target.value)} />
    </div>
  );
}
