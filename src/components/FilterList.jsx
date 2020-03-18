import React from "react";
import POKEMON_TYPES from "../pokemon-types.js";
import PokemonType from "./PokemonType.jsx";

export default function FilterList(props) {
  const { title, handleFilterClick, clearFilters, filters } = props;

  return (
    <div className="filter-list">
      <h2 className="text-is-color--black filter-list__title">
        Filter by {title}:
      </h2>
      <div className="filter-list__types">
        {POKEMON_TYPES.map(type => (
          <div
            className={
              filters && !filters.includes(type)
                ? "filter-list__icon filter-list__icon--inactive"
                : "filter-list__icon"
            }
            key={type}
          >
            <PokemonType type={type} handleClick={handleFilterClick} />
          </div>
        ))}
      </div>
      <button onClick={() => clearFilters()}>
        <i className="fal fa-close"></i>
        Clear All
      </button>
    </div>
  );
}
