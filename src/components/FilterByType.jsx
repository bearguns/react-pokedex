import React, { useContext } from "react";
import { Context } from "./Store.jsx";
import FilterList from "./FilterList.jsx";

export default function FilterByType() {
  const [state, dispatch] = useContext(Context);
  const { typeFilters } = state;
  const pushTypeFilter = type => {
    if (typeFilters.includes(type)) {
      return dispatch({
        type: "SET_TYPE_FILTERS",
        payload: [...typeFilters.filter(t => t != type)]
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
      payload: []
    });
  return (
    <FilterList
      title={"type"}
      handleFilterClick={pushTypeFilter}
      clearFilters={clearTypeFilters}
    />
  );
}
