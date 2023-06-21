import React from 'react';
import { FaSearch } from 'react-icons/fa';

function Search(props) {
  const { searchQuery, handleSearchQueryChange, handleSearchSubmit } = props;

  return (
    <div className="navbar-search">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          placeholder="Buscar..."
        />
        <button type="submit" className="search-icon">
          <FaSearch />
        </button>
      </form>
    </div>
  );
}

export default Search;
