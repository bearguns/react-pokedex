import React, { useState, useEffect } from "react";
import { Pokedex } from "./Pokedex.jsx";
import { Sidebar } from "./Sidebar.jsx";
import "../scss/main.scss";
import "../scss/components/App.scss";

function App() {
  const [filters, updateFilters] = useState([]);
  const [pokedex, updatePokedex] = useState([]);
  let pokemon = {};

  useEffect(async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    );
    const pokemonList = await response.json();
    pokemon = [...pokemonList.pokemon];
    updatePokedex(pokemon);
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <Pokedex pokedex={pokedex} />
    </div>
  );
}

export default App;
