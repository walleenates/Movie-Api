// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a movie..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
