import "./ColorFilter.css";
import { useState } from "react";

export default function ColorFilter(props) {
  const colors = [
    { name: "green", code: "#008000" },
    { name: "blue", code: "#0000FF" },
    { name: "black", code: "#000000" },
    { name: "yellow", code: "#FFFF00" },
    { name: "white", code: "#FFFFFF" },
    { name: "red", code: "#FF0000" },
    { name: "khaki", code: "#B7B169" },
    { name: "orange", code: "#FFA500" },
    { name: "pink", code: "#FFC0CB" },
    { name: "purple", code: "#800080" },
    { name: "brown", code: "#A52A2A" },
    { name: "beige", code: "#F5F5DC" },
  ];

  const [colorsAreChecked, setColorsAreChecked] = useState({
    green: false,
    blue: false,
    black: false,
    yellow: false,
    white: false,
    red: false,
    khaki: false,
    orange: false,
    pink: false,
    purple: false,
    brown: false,
    beige: false,
  });

  const handleColorChange = (colorName) => {
    setColorsAreChecked((prevChecked) => ({
      ...prevChecked,
      [colorName]: !prevChecked[colorName],
    }));
  };

  const handleSave = () => {
    const pickedColors = [];
    for (const color in colorsAreChecked) {
      if (colorsAreChecked[color] === true) {
        pickedColors.push(color);
      }
    }
    props.onColorSelect(pickedColors);
  };

  const resetFilter = () => {
    setColorsAreChecked({
      green: false,
      blue: false,
      black: false,
      yellow: false,
      white: false,
      red: false,
      khaki: false,
      orange: false,
      pink: false,
      purple: false,
      brown: false,
      beige: false,
    });
    props.onColorSelect([]);
  };

  return (
    <div className="colorFilterBackground">
      <div className="colorFilter">
        <div className="backAndCloseButtons">
          <button className="closeButton" onClick={props.handleBackButton}>
            ◀
          </button>
          <button className="closeButton" onClick={props.handleCloseFilterbar}>
            ☓
          </button>
        </div>
        <h3 className="colorFilterHeader">Color</h3>
        {colors.map((color) => (
          <label className="color" key={color.name}>
            {/*<span
              className="checkmark"
              style={{ backgroundColor: color.code }}
        ></span>*/}
            <input
              type="checkbox"
              checked={colorsAreChecked[color.name]}
              onChange={() => handleColorChange(color.name)}
              style={{ accentColor: color.code }}
            ></input>
            {color.name}
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
