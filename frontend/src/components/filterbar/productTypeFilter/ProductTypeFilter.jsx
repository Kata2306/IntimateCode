import { useState } from "react";
import "./ProductTypeFilter.css";

export default function ProductTypeFilter(props) {
  const categories = [
    "Bras",
    "Panties",
    "Shapewear",
    "Lingerie_Set",
    "Hosiery",
    "Sleepwear",
    "Fetish",
  ];

  const [typesAreChecked, setTypesAreChecked] = useState({
    Bras: false,
    Panties: false,
    Shapewear: false,
    Lingerie_Set: false,
    Hosiery: false,
    Sleepwear: false,
    Fetish: false,
  });

  const handleTypeChange = (type) => {
    setTypesAreChecked((prevChecked) => ({
      ...prevChecked,
      [type]: !prevChecked[type],
    }));
  };

  const handleSave = () => {
    const pickedProductTypes = [];
    for (const type in typesAreChecked) {
      if (typesAreChecked[type] === true) {
        pickedProductTypes.push(type);
      }
    }
    console.log(pickedProductTypes);
    props.onTypeSelect(pickedProductTypes);
  };

  const resetFilter = () => {
    console.log("Resetting filter"); // Add this line for debugging
    setTypesAreChecked({
      Bras: false,
      Panties: false,
      Shapewear: false,
      Lingerie_Set: false,
      Hosiery: false,
      Sleepwear: false,
      Fetish: false,
    });
  };

  return (
    <div className="filterBackground">
      <div className="filter">
        <div className="backAndCloseButtons">
          <button className="closeButton" onClick={props.handleBackButton}>
            ◀
          </button>
          <button className="closeButton" onClick={props.handleCloseFilterbar}>
            ☓
          </button>
        </div>
        <h3 className="filterHeader">Type</h3>
        {categories.map((type) => (
          <label className="filterType" key={type}>
            <span className="checkmark"></span>
            <input
              type="checkbox"
              checked={typesAreChecked[type]}
              onChange={() => handleTypeChange(type)}
            />
            {type}
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
