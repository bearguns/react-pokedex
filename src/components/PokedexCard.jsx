import React from "react";
import { Link } from "react-router-dom";
import PokemonTypeList from "./PokemonTypeList.jsx";

export default function PokedexCard(props) {
  const { pokemon } = props;
  return (
    <Link to={pokemon.num}>
      <div className="pokedex-card">
        <div className="pokedex-card__banner text-is-color--white">
          <h3>#{pokemon.num}</h3>
          <h3>{pokemon.name}</h3>
        </div>

        <div class="pokedex-card__content">
          <div className="pokedex-card__types">
            <div>
              <h5>Type:</h5>
              <PokemonTypeList types={pokemon.type} />
            </div>
            <div>
              <h5>Weakness:</h5>
              <PokemonTypeList types={pokemon.weaknesses} />
            </div>
          </div>
          <div className="pokedex-card__image">
            <img alt="" src={pokemon.img} height="96" />
          </div>
        </div>
      </div>
    </Link>
  );
}
