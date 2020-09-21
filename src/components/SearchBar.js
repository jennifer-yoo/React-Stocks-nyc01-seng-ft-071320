import React from 'react';


const SearchBar = (props) => {
console.log(props.checked)
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" name="checked" value="Alphabetically" checked={props.checked ==="Alphabetically"} onChange={(e) => props.searchHandler}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" name="checked" value="Price" checked={props.checked ==="Price"} onChange={(e) => props.searchHandler}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select name="filtered" onChange={(e) => props.filteredSearch(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
