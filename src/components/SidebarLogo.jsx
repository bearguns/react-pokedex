import React from "react";
import SidebarIcon from "./SidebarIcon.jsx";
import SidebarTitle from "./SidebarTitle.jsx";
import FilterButton from "./FilterButton.jsx";

export default function SidebarLogo(props) {
  const { handleFilterClick, showFilterButton } = props;
  return (
    <div className="sidebar-logo">
      <SidebarIcon />
      <SidebarTitle />
      {showFilterButton && <FilterButton handleClick={handleFilterClick} />}
    </div>
  );
}
