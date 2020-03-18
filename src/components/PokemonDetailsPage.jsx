import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "./Store.jsx";
import PokemonDetails from "./PokemonDetails.jsx";

export default function PokemonDetailsPage() {
  const [state] = useContext(Context);
  const { num } = useParams();
  const { masterPokedex } = state;

  return (
    <div className="pokemon-details__page">
      <Link className="pokemon-details__nav" to="/">
        <i className="fal fa-chevron-left"></i>Back to Pokedex
      </Link>
      {masterPokedex
        .filter(pokemon => pokemon.num === num)
        .map(pokemon => (
          <PokemonDetails pokemon={pokemon} />
        ))}
    </div>
  );
}
