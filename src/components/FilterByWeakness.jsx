import React, { useContext } from "react";
import { Context } from "./Store.jsx";
import FilterList from "./FilterList.jsx";

export default function FilterByWeakness() {
  const [state, dispatch] = useContext(Context);
  const { weaknessFilters } = state;
  const updateFilters = type => {
    if (
      weaknessFilters &&
      weaknessFilters.length === 1 &&
      weaknessFilters[0] === type
    ) {
      return clearWeaknessFilters();
    }
    return pushWeaknessFilter(type);
  };
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
      handleFilterClick={updateFilters}
      clearFilters={clearWeaknessFilters}
      filters={weaknessFilters}
    />
  );
}
