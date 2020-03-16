import React, { createContext, useReducer, useEffect } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_POKEDEX":
      return {
        ...state,
        pokedex: [...action.payload]
      };
    case "SET_TYPE_FILTERS":
      return {
        ...state,
        typeFilters: action.payload
      };
    case "SET_WEAKNESS_FILTERS":
      return {
        ...state,
        weaknessFilters: action.payload
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        typeFilters: [],
        weaknessFilters: []
      };
    case "SET_FILTERED_POKEDEX":
      return {
        ...state,
        pokedex: [...action.payload]
      };
    default:
      return state;
  }
};

const initialState = {
  pokedex: [],
  typeFilters: [],
  weaknessFilters: [],
  filteredPokedex: []
};

export const Context = createContext(initialState);

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    async function fetchPokedex() {
      const response = await fetch(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
      );
      const pokemonList = await response.json();
      const { pokemon } = pokemonList;
      dispatch({ type: "SET_POKEDEX", payload: [...pokemon] });
    }
    fetchPokedex();
  }, []);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Store;
