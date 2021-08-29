import React from "react";
interface Props {}
import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResults";

export const Search: React.FC<Props> = () => {
  return (
    <div className="search">
      <SearchBar />
      <SearchResults />
    </div>
  );
};
