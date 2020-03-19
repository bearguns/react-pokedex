import React, { useContext } from "react";
import { Context } from "./Store.jsx";
import FilterList from "./FilterList.jsx";

export default function FilterByWeakness() {
  const [state, dispatch] = useContext(Context);
  const {
    filters: { weaknesses }
  } = state;
  const updateFilters = type => {
    if (weaknesses && weaknesses.length === 1 && weaknesses[0] === type) {
      return clearWeaknessFilters();
    }
    return pushWeaknessFilter(type);
  };
  const pushWeaknessFilter = type => {
    if (!weaknesses) {
      return dispatch({
        type: "SET_WEAKNESS_FILTERS",
        payload: [type]
      });
    }
    if (weaknesses.includes(type)) {
      return dispatch({
        type: "SET_WEAKNESS_FILTERS",
        payload: [...weaknesses.filter(t => t !== type)]
      });
    }

    return dispatch({
      type: "SET_WEAKNESS_FILTERS",
      payload: [...weaknesses, type]
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
      filters={weaknesses}
    />
  );
}
