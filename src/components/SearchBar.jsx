import React, { useContext, useState, useEffect } from "react";
import Fuse from "fuse.js";

import { Context } from "./Store.jsx";

export default function SearchBar() {
  const [state, dispatch] = useContext(Context);
  const { masterPokedex } = state;
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
      return dispatch({
        type: "SET_ACTIVE_POKEDEX",
        payload: [...masterPokedex]
      });
    }

    if (query.length > 2) {
      const results = fuse.search(query);
      dispatch({
        type: "SET_NAME_FILTER",
        payload: query
      });
      return dispatch({
        type: "SET_ACTIVE_POKEDEX",
        payload: results.map(result => result.item)
      });
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        name="query"
        onChange={updateSearchTerm}
        placeholder="search by pokemon name"
      />
      ;
    </div>
  );
}
