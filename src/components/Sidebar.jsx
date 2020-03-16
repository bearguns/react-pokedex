import React from "react";
import SidebarLogo from "./SidebarLogo.jsx";
import FilterByType from "./FilterByType.jsx";
import FilterByWeakness from "./FilterByWeakness.jsx";

export function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarLogo />
      <FilterByType />
      <FilterByWeakness />
    </div>
  );
}
