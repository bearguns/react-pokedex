import React from "react";

export default function PokemonImage(props) {
  const { img, width } = props;

  return (
    <div className="pokemon-details__image">
      <img alt="" src={img} width={width} height="auto" />
    </div>
  );
}
