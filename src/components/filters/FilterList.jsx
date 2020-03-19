import React, { useContext } from "react";
import POKEMON_TYPES from "../pokemon/pokemon-types.js";
import PokemonType from "../pokemon/PokemonType.jsx";
import { Context } from "../Store.jsx";

export default function FilterList(props) {
  const { title, filterList } = props;
  const [state, dispatch] = useContext(Context);
  const { filters } = state;

  const updateFilters = pokemonType => {
    if (
      filters[filterList] &&
      filters[filterList].length === 1 &&
      filters[filterList][0] === pokemonType
    ) {
      return clearFilters(filterList);
    }
    return pushFilter(pokemonType);
  };

  const clearFilters = () => {
    return dispatch({
      type:
        filterList === "types" ? "SET_TYPE_FILTERS" : "SET_WEAKNESS_FILTERS",
      payload: null
    });
  };

  const pushFilter = pokemonType => {
    const actionType =
      filterList === "types" ? "SET_TYPE_FILTERS" : "SET_WEAKNESS_FILTERS";
    if (!filters[filterList]) {
      return dispatch({
        type: actionType,
        payload: [pokemonType]
      });
    }

    if (filters[filterList].includes(pokemonType)) {
      return dispatch({
        type: actionType,
        payload: [...filters[filterList].filter(type => type !== pokemonType)]
      });
    }

    return dispatch({
      type: actionType,
      payload: [...filters[filterList], pokemonType]
    });
  };

  return (
    <div className="filter-list">
      <h2 className="text-is-color--black filter-list__title">
        Filter by {title}:
      </h2>
      <div className="filter-list__types">
        {POKEMON_TYPES.map(type => (
          <div
            className={
              filters[filterList] && !filters[filterList].includes(type)
                ? "filter-list__icon filter-list__icon--inactive"
                : "filter-list__icon"
            }
            key={type}
          >
            <PokemonType type={type} handleClick={updateFilters} />
          </div>
        ))}
      </div>
      <button className="filter-list__clear" onClick={() => clearFilters()}>
        <i className="fal fa-close"></i>
        Clear All
      </button>
    </div>
  );
}
