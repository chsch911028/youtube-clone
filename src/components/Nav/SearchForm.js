import React from "react";
import SearchIcon from "assets/images/search.svg";

const SearchForm = () => {
  return (
    <form className="search-form">
      <input className="search-bar-input" placeholder="검색" />
      <button className="search-button" type="submit">
        <img className="search-button-img" src={SearchIcon} alt="search" />
      </button>
      <div id="width" />
    </form>
  );
};

export default SearchForm;
