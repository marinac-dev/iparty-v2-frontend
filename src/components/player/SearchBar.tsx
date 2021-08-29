import React from "react";
interface Props {}

export const SearchBar: React.FC<Props> = () => {
  return (
    <div className="search-bar">
      <input type="search" autoComplete="off" list="suggestions" placeholder="Search for a song" />
      <button type="submit">
        <i className="far fa-search"></i>
      </button>
      <datalist id="suggestions">
      </datalist>
    </div>
  );
};
