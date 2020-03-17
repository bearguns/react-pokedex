import React, { useContext } from "react";
import { Context } from "./Store.jsx";
import PokemonTypeList from "./PokemonTypeList.jsx";

function PokedexCard(props) {
  const { pokemon } = props;
  return (
    <div className="pokedex-card">
      <div className="pokedex-card__banner text-is-color--white">
        <h1>#{pokemon.num}</h1>
        <h1>{pokemon.name}</h1>
      </div>

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
  const [state] = useContext(Context);
  const { activePokedex, filters } = state;

  return (
    <div className="pokedex">
      {activePokedex
        .filter(pokemon => {
          return (
            (!filters.types ||
              filters.types.every(type => pokemon.type.includes(type))) &&
            (!filters.weaknesses ||
              filters.weaknesses.every(type =>
                pokemon.weaknesses.includes(type)
              ))
          );
        })
        .map(pokemon => (
          <PokedexCard pokemon={pokemon} key={pokemon.id} />
        ))}
    </div>
  );
}
