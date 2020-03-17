import React, { useContext } from "react";
import { Context } from "./Store.jsx";
import FilterList from "./FilterList.jsx";

export default function FilterByType() {
  const [state, dispatch] = useContext(Context);
  const { filters } = state;

  const updateFilters = type => {
    if (
      filters.types &&
      filters.types.length === 1 &&
      filters.types[0] === type
    )
      return clearTypeFilters();

    return pushTypeFilter(type);
  };

  const pushTypeFilter = type => {
    if (!filters.types) {
      return dispatch({
        type: "SET_TYPE_FILTERS",
        payload: [type]
      });
    }
    if (filters.types.includes(type)) {
      return dispatch({
        type: "SET_TYPE_FILTERS",
        payload: [...filters.types.filter(t => t !== type)]
      });
    }
    return dispatch({
      type: "SET_TYPE_FILTERS",
      payload: [...filters.types, type]
    });
  };

  const clearTypeFilters = () =>
    dispatch({
      type: "SET_TYPE_FILTERS",
      payload: null
    });
  return (
    <FilterList
      title={"type"}
      handleFilterClick={updateFilters}
      filters={filters.types}
      clearFilters={clearTypeFilters}
    />
  );
}
