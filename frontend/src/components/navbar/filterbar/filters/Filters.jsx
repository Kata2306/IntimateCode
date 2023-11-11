import "./Filters.css"
import FilterButton from "../filterButton/FilterButton";
import { useState } from "react";
import BrandFilter from "../brandFilter/BrandFilter";
import ColorFilter from "../colorFilter/ColorFilter";
import Filterbar from "../filterbar/Filterbar";
import ProductTypeFilter from "../productTypeFilter/ProductTypeFilter";

export default function Filters(props) {

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
      
        const handleBrandSelection = (pickedBrands) => {
          setSelectedBrands(pickedBrands);
          props.onBrandSelect(pickedBrands);
        };
        // end BrandFilter
      
        // for TypeFilter
        const [selectedTypes, setSelectedTypes] = useState([]);
      
        const handleTypeSelection = (pickedTypes) => {
          setSelectedTypes(pickedTypes);
        };
        // end TypeFilter

        console.log(selectedBrands);

    return (
      <div className="filters">
        <FilterButton onClick={() => setFilter("active")} />
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
      </div>
    );
  }