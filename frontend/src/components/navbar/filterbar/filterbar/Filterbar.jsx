import "./Filterbar.css";

export default function Filterbar(props) {
  return (
    <div className="filterbarBackground">
      <div className="filterbar">
        <button className="closeButton" onClick={props.handleCloseFilterbar}>☓</button>
        <h3 className="filterbarHeader">Filter</h3>
        <ul className="filterbarList">
          <li className="filterbarListItem" onClick={() => props.handleFilterbarItemColor("activeColor")}>
            <p>Color</p>
            <p>≻</p>
          </li>
          <li className="filterbarListItem" onClick={() => props.handleFilterbarItemBrand("activeBrand")}>
            <p>Brand</p>
            <p>≻</p>
          </li>
          <li className="filterbarListItem" onClick={() => props.handleFilterbarItemType("activeType")}>
            <p>Product Type</p>
            <p>≻</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
