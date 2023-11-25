import "./SearchBar.css";

export default function SearchBar(props) {
  const handleSearch = (e) => {
    console.log(e.target.value);
    props.onSearch(e.target.value);
  }


  return (
    <div className="searchBar">
      <p className="searchBarImg">🔍</p>
      <input
        className="searchBarInput"
        type="text"
        onChange={handleSearch}
      ></input>
    </div>
  );
}
