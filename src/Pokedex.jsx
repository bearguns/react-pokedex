import React, { useState } from "react";

function PokemonTypeIcon(props) {
  const { type } = props;
  switch (type) {
    case "Bug":
      return <i className="fal fa-bug"></i>;
    case "Dragon":
      return <i className="fal fa-dragon"></i>;
    case "Electric":
      return <i className="fal fa-bolt"></i>;
    case "Fighting":
      return <i className="fal fa-fist-raised"></i>;
    case "Fire":
      return <i className="fal fa-flame"></i>;
    case "Flying":
      return <i className="fal fa-feather-alt"></i>;
    case "Grass":
      return <i className="fal fa-leaf"></i>;
    case "Ghost":
      return <i className="fal fa-ghost"></i>;
    case "Ground":
      return <i className="fal fa-shovel"></i>;
    case "Ice":
      return <i className="fal fa-icicles"></i>;
    case "Normal":
      return <i className="fal fa-dot-circle"></i>;
    case "Poison":
      return <i className="fal fa-flask-poison"></i>;
    case "Psychic":
      return <i className="fal fa-head-side-brain"></i>;
    case "Rock":
      return <i className="fal fa-mountains"></i>;
    case "Water":
      return <i className="fal fa-water"></i>;
    default:
      return <i className="fal fa-dot-circle"></i>;
  }
}

function PokemonTypes(props) {
  return (
    <ul>
      {props.types.map(type => (
        <li key={type}>
          <PokemonTypeIcon type={type} />
        </li>
      ))}
    </ul>
  );
}
function PokedexCard(props) {
  const { pokemon } = props;
  return (
    <div className="pokedex__card">
      <h1>{pokemon.name}</h1>
      <h3>Type(s):</h3>
      <PokemonTypes types={pokemon.type} />
      <h3>Weaknesses:</h3>
      <PokemonTypes types={pokemon.weaknesses} />
    </div>
  );
}
export function Pokedex() {
  const [pokedex, setPokedex] = useState([]);
  fetch(
    "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
  )
    .then(response => response.json())
    .then(pokemonList => setPokedex(pokemonList.pokemon));

  return (
    <div className="pokedex">
      {pokedex.map(pokemon => (
        <PokedexCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
}
