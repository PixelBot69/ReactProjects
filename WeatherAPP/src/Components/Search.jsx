import React from 'react';

export default function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="searchs">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
