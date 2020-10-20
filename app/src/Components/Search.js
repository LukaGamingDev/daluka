import React, { useState, useEffect } from "react";
import Data from "../searchdata.js";

function Search() {
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = Data.filter((item) =>
      item.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    if (searchItem === "") {
      setSearchResults([]);
      return;
    }
    setSearchResults(results);
  }, [searchItem]);

  return (
    <div className="search-bar">
      <input
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />

      <div className="data">
        {searchResults.map((item, index) => (
          <div key={index} className="row">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
