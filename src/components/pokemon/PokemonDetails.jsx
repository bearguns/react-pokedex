import React from "react";
import PokemonDetailsBanner from "./PokemonDetailsBanner.jsx";
import PokemonInfoCard from "./PokemonInfoCard.jsx";
import PokemonImage from "./PokemonImage.jsx";
import PokemonTypeList from "./PokemonTypeList.jsx";
import PokemonEvolutions from "./PokemonEvolutions.jsx";
export default function PokemonDetails(props) {
  const { pokemon } = props;

  return (
    <div className="pokemon-details__content">
      <PokemonDetailsBanner num={pokemon.num} name={pokemon.name} />
      <div className="pokemon-details__details">
        <PokemonInfoCard pokemon={pokemon} />
        <div className="pokemon-details__types">
          <h5>Type:</h5>
          <PokemonTypeList title="Type" types={pokemon.type} />
          <h5>Weak against:</h5>
          <PokemonTypeList types={pokemon.weaknesses} />
          <PokemonEvolutions pokemon={pokemon} />
        </div>
        <PokemonImage img={pokemon.img} width={"auto"} />
      </div>
    </div>
  );
}
