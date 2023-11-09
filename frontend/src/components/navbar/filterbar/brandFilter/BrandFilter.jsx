import { useState, useEffect } from "react";
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

  const [brandsAreChecked, setBrandsAreChecked] = useState(() => {
    const initialCheckedState = {};
    brands.forEach((brand) => {
      initialCheckedState[brand] = false;
    });
    return initialCheckedState;
  });

  console.log(brands);

  useEffect(() => {
    if (props.filteredProducts && Array.isArray(props.filteredProducts)) {
      const selectedBrands = new Set(
        props.filteredProducts.map((product) => product.brand)
      );
      const updatedBrandsCheck = { ...brandsAreChecked };

      for (const brand in updatedBrandsCheck) {
        updatedBrandsCheck[brand] = selectedBrands.has(brand);
      }

      setBrandsAreChecked(updatedBrandsCheck);
    }
  }, [props.filteredProducts, brandsAreChecked]);

  const handleBrandChange = (brandName) => {
    setBrandsAreChecked((prevChecked) => ({
      ...prevChecked,
      [brandName]: !prevChecked[brandName],
    }));
  };

  const handleSave = () => {
    const pickedBrands = Object.keys(brandsAreChecked).filter(
      (brand) => brandsAreChecked[brand]
    );
    props.onBrandSelect(pickedBrands);
    console.log("the picked brand is: " + pickedBrands);
  };

  const resetFilter = () => {
    setBrandsAreChecked(
      Object.fromEntries(brands.map((brand) => [brand, false]))
    );
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
            <span
              className={
                brandsAreChecked[brand] ? "checkmark checked" : "checkmark"
              }
            ></span>
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
