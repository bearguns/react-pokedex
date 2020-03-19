import React, { useContext } from "react";
import POKEMON_TYPES from "../pokemon/pokemon-types.js";
import PokemonType from "../pokemon/PokemonType.jsx";
import { Context } from "../Store.jsx";

export default function FilterList(props) {
  const { title, filterList } = props;
  const [state, dispatch] = useContext(Context);
  const activeFilterList = state.filters[filterList];

  const updateFilters = pokemonType => {
    if (
      activeFilterList &&
      activeFilterList.length === 1 &&
      activeFilterList[0] === pokemonType
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
    if (!activeFilterList) {
      return dispatch({
        type: actionType,
        payload: [pokemonType]
      });
    }

    if (activeFilterList.includes(pokemonType)) {
      return dispatch({
        type: actionType,
        payload: [...activeFilterList.filter(type => type !== pokemonType)]
      });
    }

    return dispatch({
      type: actionType,
      payload: [...activeFilterList, pokemonType]
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
              activeFilterList && !activeFilterList.includes(type)
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
