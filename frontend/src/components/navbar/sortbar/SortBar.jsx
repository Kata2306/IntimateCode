import "./SortBar.css";

export default function SortBar(props) {
    const handleSort = (e) => {
        console.log(e.target.value)
        props.onSort(e.target.value);
    }

    return (
        <div>
            <select className="sortBar" id="sortBy" name="sortBy" form="sortForm" defaultValue="" onChange={(e) => handleSort(e)}>
                <option value="" disabled>Sort by</option>
                <option value="Price (low-high)">Price (low-high)</option>
                <option value="Price (high-low)">Price (high-low)</option>
                <option value="Best rating">Best rating</option>
            </select>
        </div>
    )
}
