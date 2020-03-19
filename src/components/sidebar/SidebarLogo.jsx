import React from "react";
import SidebarIcon from "./SidebarIcon.jsx";
import SidebarTitle from "./SidebarTitle.jsx";

export default function SidebarLogo() {
  return (
    <div className="sidebar__logo">
      <SidebarIcon />
      <SidebarTitle />
    </div>
  );
}
