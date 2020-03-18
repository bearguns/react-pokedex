import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./Store.jsx";
import PokemonImage from "./PokemonImage.jsx";
function PokemonEvolutionList(props) {
  const { pokemon, pokedex } = props;

  return (
    <div className="pokemon-evolutions__list">
      {pokemon.map(pokemon => {
        let img = pokedex.filter(p => p.num === pokemon.num)[0].img;
        return (
          <Link to={pokemon.num}>
            <PokemonImage img={img} width="64" />
          </Link>
        );
      })}
    </div>
  );
}
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
