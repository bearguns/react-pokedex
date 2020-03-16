import React, { useContext, useState, useEffect } from "react";
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
  const [state, dispatch] = useContext(Context);
  const { pokedex, typeFilters, weaknessFilters, filteredPokedex } = state;

  useEffect(() => {
    if (!typeFilters && !weaknessFilters) {
      return dispatch({
        type: "SET_FILTERED_POKEDEX",
        payload: null
      });
    }

    return dispatch({
      type: "SET_FILTERED_POKEDEX",
      payload: [
        ...pokedex.filter(pokemon => {
          return (
            (!typeFilters ||
              typeFilters.every(type => pokemon.type.includes(type))) &&
            (!weaknessFilters ||
              weaknessFilters.every(type => pokemon.weaknesses.includes(type)))
          );
        })
      ]
    });
  }, [typeFilters, weaknessFilters, pokedex, dispatch]);

  return (
    <div className="pokedex">
      {filteredPokedex
        ? filteredPokedex.map(pokemon => (
            <PokedexCard pokemon={pokemon} key={pokemon.id} />
          ))
        : pokedex.map(pokemon => (
            <PokedexCard pokemon={pokemon} key={pokemon.id} />
          ))}
    </div>
  );
}
