import "./Filters.css"
import FilterButton from "../filterButton/FilterButton";

export default function Filters(props) {
    return (
      <div className="filters">
        <FilterButton onClick={() => props.HandleFilterButton("active")} />
      </div>
    );
  }