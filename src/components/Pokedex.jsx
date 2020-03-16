import React from "react";
import PokemonTypeList from "./PokemonTypeList.jsx";

function PokedexCard(props) {
  const { pokemon } = props;
  return (
    <div className="pokedex-card">
      <h1>{pokemon.name}</h1>
      <div className="pokedex-card__types">
        <div>
          <h3>Type(s):</h3>
          <PokemonTypeList types={pokemon.type} />
        </div>
        <div>
          <h3>Weaknesses:</h3>
          <PokemonTypeList types={pokemon.weaknesses} />
        </div>
      </div>
    </div>
  );
}
export function Pokedex(props) {
  const { pokedex } = props;
  return (
    <div className="pokedex">
      {pokedex.map(pokemon => (
        <PokedexCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
}
