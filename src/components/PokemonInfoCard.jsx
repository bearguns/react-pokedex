import React from "react";

export default function PokemonInfoCard(props) {
  const { pokemon } = props;

  return (
    <div className="pokemon-details__info">
      <h4>Height:</h4>
      <p>{pokemon.height}</p>
      <h4>Weight:</h4>
      <p>{pokemon.weight}</p>
      <h4>Likes:</h4>
      <p>{pokemon.candy}</p>
    </div>
  );
}
