import { useState, useEffect } from "react";
import "./BrandFilter.css";

export default function BrandFilter(props) {
  const [brandsAreChecked, setBrandsAreChecked] = useState(() => {
    const initialCheckedState = {};
    props.filteredProducts.forEach((product) => {
      initialCheckedState[product.brand.toLowerCase()] = false;
    });
    return initialCheckedState;
  });

  useEffect(() => {
    if (props.filteredProducts && Array.isArray(props.filteredProducts)) {
      const uniqueBrands = Array.from(
        new Set(
          props.filteredProducts.map((product) => product.brand.toLowerCase())
        )
      );

      setBrandsAreChecked((prevChecked) => {
        const updatedBrandsCheck = { ...prevChecked };

        uniqueBrands.forEach((brand) => {
          updatedBrandsCheck[brand] = prevChecked[brand] || false;
        });

        return updatedBrandsCheck;
      });
    }
  }, [props.filteredProducts]);

  const handleBrandChange = (brandName) => {
    setBrandsAreChecked((prevChecked) => {
      const updatedBrandsCheck = { ...prevChecked };
      updatedBrandsCheck[brandName.toLowerCase()] =
        !prevChecked[brandName.toLowerCase()];
      return updatedBrandsCheck;
    });
  };

  const handleSave = () => {
    const pickedBrands = Object.keys(brandsAreChecked).filter(
      (brand) => brandsAreChecked[brand]
    );
    props.onBrandSelect(pickedBrands);
  };

  const resetFilter = () => {
    setBrandsAreChecked(
      Object.fromEntries(
        Array.from(
          new Set(
            props.filteredProducts.map((product) => product.brand.toLowerCase())
          )
        ).map((brand) => [brand, false])
      )
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
        {Array.from(
          new Set(props.filteredProducts.map((product) => product.brand))
        ).map((brand) => (
          <label className="brand" key={brand}>
            <span
              className={
                brandsAreChecked[brand.toLowerCase()]
                  ? "checkmark checked"
                  : "checkmark"
              }
            ></span>
            <input
              type="checkbox"
              checked={brandsAreChecked[brand.toLowerCase()]}
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
