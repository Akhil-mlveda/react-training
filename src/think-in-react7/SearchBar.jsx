import React from "react";

function SearchBar(props) {
  return (
    
      <form>
        <input
          type="text"
          placeholder="Search"
          value={props.filterText}
          onChange={(e) => props.onFilterTextChange(e.target.value)}
        />
        <p>
          <input
            type="checkbox"
            id="inStock"
            checked={props.inStockOnly}
            onChange={(e) => props.onInStockChange(e.target.checked)}
          />
          <label htmlFor="inStock">Only show products in stock</label>
          
        </p>
      </form>
  
  );
}

export default SearchBar;
