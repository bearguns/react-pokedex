import React from "react";
import POKEMON_TYPES from "../pokemon-types.js";
import PokemonTypeList from "./PokemonTypeList.jsx";
export default function FilterList(props) {
  const { handleFilterClick, filterType, activeFilters, title } = props;
  return (
    <div className="filter-list">
      <h2 className="text-is-color--black">Filter by {title}:</h2>
      <PokemonTypeList types={POKEMON_TYPES} handleClick={handleFilterClick} />
    </div>
  );
}
