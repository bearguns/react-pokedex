import React from "react";
import SidebarIcon from "./SidebarIcon.jsx";
import SidebarTitle from "./SidebarTitle.jsx";
import FilterButton from "./FilterButton.jsx";

export default function SidebarLogo(props) {
  const { handleFilterClick } = props;
  return (
    <div className="sidebar-logo">
      <SidebarIcon />
      <SidebarTitle />
      <FilterButton handleClick={handleFilterClick} />
    </div>
  );
}
