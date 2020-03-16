import React from "react";
import POKEMON_TYPES from "../pokemon-types.js";
import SidebarLogo from "./SidebarLogo.jsx";
import FilterList from "./FilterList.jsx";

export function Sidebar() {
  const handleFilterClick = type => console.log(type);
  return (
    <div className="sidebar">
      <SidebarLogo />
      <FilterList
        types={POKEMON_TYPES}
        title="type"
        handleFilterClick={handleFilterClick}
      />
      <FilterList types={POKEMON_TYPES} title="weakness" />
    </div>
  );
}
