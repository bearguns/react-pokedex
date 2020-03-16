import React, { useContext } from "react";
import { Context } from "./Store.jsx";
import FilterList from "./FilterList.jsx";

export default function FilterByType() {
  const [state, dispatch] = useContext(Context);
  const { weaknessFilters } = state;
  const pushWeaknessFilter = type => {
    if (!weaknessFilters) {
      return dispatch({
        type: "SET_WEAKNESS_FILTERS",
        payload: [type]
      });
    }
    if (weaknessFilters.includes(type)) {
      return dispatch({
        type: "SET_WEAKNESS_FILTERS",
        payload: [...weaknessFilters.filter(t => t !== type)]
      });
    }
    return dispatch({
      type: "SET_WEAKNESS_FILTERS",
      payload: [...weaknessFilters, type]
    });
  };

  const clearWeaknessFilters = () =>
    dispatch({
      type: "SET_WEAKNESS_FILTERS",
      payload: null
    });
  return (
    <FilterList
      title={"weakness"}
      handleFilterClick={pushWeaknessFilter}
      clearFilters={clearWeaknessFilters}
    />
  );
}
