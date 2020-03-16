import React, { useContext } from "react";
import { Context } from "./Store.jsx";
import FilterList from "./FilterList.jsx";

export default function FilterByType() {
  const [state, dispatch] = useContext(Context);
  const { typeFilters } = state;

  const updateFilters = type => {
    if (typeFilters && typeFilters.length === 1 && typeFilters[0] === type)
      return clearTypeFilters();

    return pushTypeFilter(type);
  };
  const pushTypeFilter = type => {
    if (!typeFilters) {
      return dispatch({
        type: "SET_TYPE_FILTERS",
        payload: [type]
      });
    }
    if (typeFilters.includes(type)) {
      return dispatch({
        type: "SET_TYPE_FILTERS",
        payload: [...typeFilters.filter(t => t !== type)]
      });
    }
    return dispatch({
      type: "SET_TYPE_FILTERS",
      payload: [...typeFilters, type]
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
      filters={typeFilters}
      clearFilters={clearTypeFilters}
    />
  );
}
