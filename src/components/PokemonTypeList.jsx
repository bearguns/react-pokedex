import React from "react";
import PokemonType from "./PokemonType.jsx";

export default function PokemonTypeList(props) {
  const { types } = props;
  return (
    <div className="pokemon-type-list">
      {types.map(type => (
        <PokemonType type={type}></PokemonType>
      ))}
    </div>
  );
}
