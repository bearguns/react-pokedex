import React from "react";
import PokemonType from "./PokemonType.jsx";
export default function PokemonTypeList(props) {
  const { types, handleClick } = props;
  return (
    <div className="pokemon-type-list">
      {types.map(type => (
        <PokemonType type={type} handleClick={handleClick}></PokemonType>
      ))}
    </div>
  );
}
