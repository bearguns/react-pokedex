import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import SidebarLogo from "./SidebarLogo.jsx";
import FilterByType from "./FilterByType.jsx";
import FilterByWeakness from "./FilterByWeakness.jsx";
import SearchBar from "./SearchBar.jsx";

export function Sidebar() {
  const [showFilters, setShowFilters] = useState(false);
  const toggleFilters = () => setShowFilters(!showFilters);

  const filtersClassName = showFilters
    ? "sidebar__filters sidebar__filters--active"
    : "sidebar__filters";

  return (
    <div className="sidebar">
      <SidebarLogo handleFilterClick={toggleFilters} />
      <SearchBar />
      <div className={filtersClassName}>
        <FilterByType />
        <FilterByWeakness />
        <button
          className="sidebar__close-filters"
          onClick={() => toggleFilters()}
        >
          View results
        </button>
      </div>
    </div>
  );
}
