import React, { useContext } from "react";
import { Context } from "../Store.jsx";
import PokemonEvolutionList from "./PokemonEvolutionList.jsx";

export default function PokemonEvolutions(props) {
  const [state] = useContext(Context);
  const { masterPokedex } = state;
  const { prev_evolution, next_evolution } = props.pokemon;

  return (
    <div className="pokemon-evolutions">
      <h5>Evolves From:</h5>
      {prev_evolution ? (
        <PokemonEvolutionList
          pokemon={prev_evolution}
          pokedex={masterPokedex}
        />
      ) : (
        <h6>N/A</h6>
      )}

      <h5>Evolves Into:</h5>
      {next_evolution ? (
        <PokemonEvolutionList
          pokemon={next_evolution}
          pokedex={masterPokedex}
        />
      ) : (
        <h6>N/A</h6>
      )}
    </div>
  );
}
