import React from "react";

export default function PokemonDetailsBanner(props) {
  const { name, num } = props;

  return (
    <div className="pokemon-details__banner">
      <h1>
        #{num} - {name}
      </h1>
    </div>
  );
}
