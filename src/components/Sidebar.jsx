import React from "react";
import POKEMON_TYPES from "../pokemon-types.js";
import SidebarLogo from "./SidebarLogo.jsx";
import PokemonTypeList from "./PokemonTypeList.jsx";
export function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarLogo />
      <div className="sidebar__filter-list">
        <h2 className="text-is-color--black">Filter by type:</h2>
        <PokemonTypeList types={POKEMON_TYPES} />
      </div>
      <div className="sidebar__filter-list">
        <h2 className="text-is-color--black">Filter by weakness:</h2>
        <PokemonTypeList types={POKEMON_TYPES} />
      </div>
    </div>
  );
}
