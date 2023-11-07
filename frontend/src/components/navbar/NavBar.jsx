import "./NavBar.css";
import Filters from "./filterbar/filters/Filters";
import SearchBar from "./searchBar/SearchBar";
import SortBar from "./sortbar/SortBar";

export default function NavBar(props) {
  return (
    <div className="navBar">
      <div className="navBarLeft">
        <SortBar />
        <Filters />
      </div>
      <SearchBar handleChange={(e) => console.log(e.target.value)} />
    </div>
  );
}
