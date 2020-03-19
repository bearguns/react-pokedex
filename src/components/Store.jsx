import React, { createContext, useReducer, useEffect } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MASTER_POKEDEX":
      return {
        ...state,
        masterPokedex: [...action.payload]
      };
    case "SET_ACTIVE_POKEDEX":
      return {
        ...state,
        activePokedex: action.payload
      };
    case "SET_TYPE_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          types: action.payload
        }
      };
    case "SET_WEAKNESS_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          weaknesses: action.payload
        }
      };
    case "SET_NAME_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          name: action.payload
        }
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          name: "",
          types: null,
          weaknesses: null
        }
      };
    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload
      };
    default:
      return state;
  }
};

const initialState = {
  masterPokedex: [],
  activePokedex: [],
  searchTerm: "",
  filters: {
    name: "",
    types: null,
    weaknesses: null
  }
};

export const Context = createContext(initialState);

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { masterPokedex } = state;
  useEffect(() => {
    async function fetchPokedex() {
      const response = await fetch(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
      );
      const pokemonList = await response.json();
      const { pokemon } = pokemonList;
      dispatch({ type: "SET_MASTER_POKEDEX", payload: [...pokemon] });
    }
    fetchPokedex();
  }, [dispatch]);

  useEffect(() => {
    dispatch({ type: "SET_ACTIVE_POKEDEX", payload: [...masterPokedex] });
  }, [masterPokedex]);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Store;
