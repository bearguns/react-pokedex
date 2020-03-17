import React from "react";
import SidebarLogo from "./SidebarLogo.jsx";
import FilterByType from "./FilterByType.jsx";
import FilterByWeakness from "./FilterByWeakness.jsx";
import SearchBar from "./SearchBar.jsx";

export function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarLogo />
      <SearchBar />
      <FilterByType />
      <FilterByWeakness />
    </div>
  );
}
