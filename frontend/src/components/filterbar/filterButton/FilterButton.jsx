import "./FilterButton.css";

export default function FilterButton(props) {
  return (
    <button className="filterButton" onClick={props.onClick}>
      <p className="filterButtonText">Filter</p>
      <img className="filterButtonImage" src="panel.png" alt="filterLogo"></img>
    </button>
  );
}
