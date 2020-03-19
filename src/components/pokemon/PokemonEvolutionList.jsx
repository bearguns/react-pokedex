import React from "react";
import { Link } from "react-router-dom";
import PokemonImage from "./PokemonImage.jsx";

export default function PokemonEvolutionList(props) {
  const { pokemon, pokedex } = props;

  return (
    <div className="pokemon-evolutions__list">
      {pokemon.map(pokemon => {
        let img = pokedex.filter(p => p.num === pokemon.num)[0].img;
        return (
          <Link to={pokemon.num} key={pokemon.num}>
            <PokemonImage img={img} width="64" />
          </Link>
        );
      })}
    </div>
  );
}
