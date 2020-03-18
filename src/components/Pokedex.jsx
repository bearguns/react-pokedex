import React, { useContext } from "react";
import { Context } from "./Store.jsx";
import PokedexCard from "./PokedexCard.jsx";

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
