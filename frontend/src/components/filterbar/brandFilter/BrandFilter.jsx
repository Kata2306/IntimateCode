import { useState } from "react";
import "./BrandFilter.css";

export default function BrandFilter(props) {
  const brands = [
    "Intimissimi",
    "Fenty",
    "Bluebella",
    "Hanky_Panky",
    "Amorelie",
    "Fleur_de_Mal",
    "Victorias_Secret",
    "Agent_Provacateur",
    "CUUP",
  ];

  const [brandsAreChecked, setBrandsAreChecked] = useState({
    Intimissimi: false,
    Fenty: false,
    Bluebella: false,
    Hanky_Panky: false,
    Amorelie: false,
    Fleur_de_Mal: false,
    Victorias_Secret: false,
    Agent_Provacateur: false,
    CUUP: false,
  });

  const handleBrandChange = (brandName) => {
    setBrandsAreChecked((prevChecked) => ({
      ...prevChecked,
      [brandName]: !prevChecked[brandName],
    }));
  };

  const handleSave = () => {
    const pickedBrands = [];
    for (const brand in brandsAreChecked) {
      if (brandsAreChecked[brand] === true) {
        pickedBrands.push(brand);
      }
    }
    console.log(pickedBrands);
    props.onBrandSelect(pickedBrands);
  };

  const resetFilter = () => {
    console.log("Resetting filter"); // Add this line for debugging
    setBrandsAreChecked({
      Intimissimi: false,
      Fenty: false,
      Bluebella: false,
      Hanky_Panky: false,
      Amorelie: false,
      Fleur_de_Mal: false,
      Victorias_Secret: false,
      Agent_Provacateur: false,
      CUUP: false,
    });
  };

  return (
    <div className="filterBackground">
      <div className="brandFilter">
        <div className="backAndCloseButtons">
          <button className="closeButton" onClick={props.handleBackButton}>
            ◀
          </button>
          <button className="closeButton" onClick={props.handleCloseFilterbar}>
            ☓
          </button>
        </div>
        <h3 className="brandFilterHeader">Brand</h3>
        {brands.map((brand) => (
          <label className="brand" key={brand}>
            <span className="checkmark"></span>
            <input
              type="checkbox"
              checked={brandsAreChecked[brand]}
              onChange={() => handleBrandChange(brand)}
            />
            {brand}
          </label>
        ))}
        <div className="buttons">
          <button className="button" onClick={handleSave}>
            Save
          </button>
          <button className="button" onClick={resetFilter}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
