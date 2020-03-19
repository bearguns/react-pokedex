import React, { useContext } from "react";
import Fuse from "fuse.js";
import { Context } from "../Store.jsx";

export default function SearchBar() {
  const [state, dispatch] = useContext(Context);
  const { masterPokedex, searchTerm } = state;
  const fuse = new Fuse(masterPokedex, {
    shouldSort: true,
    threshold: 0,
    location: 0,
    distance: 0,
    minMatchCharLength: 3,
    keys: ["name"]
  });

  const updateSearchTerm = e => {
    const query = e.target.value;

    if (!query) {
      dispatch({
        type: "SET_SEARCH_TERM",
        payload: ""
      });
      return dispatch({
        type: "SET_ACTIVE_POKEDEX",
        payload: [...masterPokedex]
      });
    }

    if (query) {
      dispatch({
        type: "SET_SEARCH_TERM",
        payload: query
      });
    }

    if (query.length > 2) {
      const results = fuse.search(query);
      return dispatch({
        type: "SET_ACTIVE_POKEDEX",
        payload: results.map(result => result.item)
      });
    }

    return undefined;
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        name="query"
        onChange={updateSearchTerm}
        placeholder="search by pokemon name"
        value={searchTerm}
      />
    </div>
  );
}
