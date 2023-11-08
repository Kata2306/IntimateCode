import "./SearchBar.css";

export default function SearchBar(props) {
  return (
    <div className="searchBar">
      <p className="searchBarImg">🔍</p>
      <input
        className="searchBarInput"
        type="text"
        onChange={props.handleChange}
      ></input>
    </div>
  );
}
