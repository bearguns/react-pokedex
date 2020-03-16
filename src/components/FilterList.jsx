import React from "react";
import POKEMON_TYPES from "../pokemon-types.js";
import PokemonTypeList from "./PokemonTypeList.jsx";

export default function FilterList(props) {
  const { title, handleFilterClick, clearFilters } = props;

  return (
    <div className="filter-list">
      <h2 className="text-is-color--black">Filter by {title}:</h2>
      <PokemonTypeList types={POKEMON_TYPES} handleClick={handleFilterClick} />
      <button onClick={() => clearFilters()}>
        <i className="fal fa-close"></i>
        Clear All
      </button>
    </div>
  );
}
