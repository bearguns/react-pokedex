import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SidebarLogo from "./SidebarLogo.jsx";
import FilterButton from "../filters/FilterButton.jsx";
import FilterList from "../filters/FilterList.jsx";
import SearchBar from "./SearchBar.jsx";

export default function Sidebar() {
  const [showFilters, setShowFilters] = useState(false);
  const toggleFilters = () => setShowFilters(!showFilters);
  const { pathname } = useLocation();
  const filtersClassName = showFilters
    ? "sidebar__filters sidebar__filters--active"
    : "sidebar__filters";

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <SidebarLogo
          handleFilterClick={toggleFilters}
          showFilterButton={pathname === "/"}
        />
        <FilterButton handleClick={toggleFilters} />
      </div>

      {pathname === "/" && (
        <React.Fragment>
          <SearchBar />
          <div className={filtersClassName}>
            <FilterList title="type" filterList="types" />
            <FilterList title="weakness" filterList="weaknesses" />
            <button
              className="sidebar__close-filters"
              onClick={() => toggleFilters()}
            >
              View results
            </button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
