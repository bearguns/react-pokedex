import React, { useContext, useState, useEffect } from "react";
import Fuse from "fuse.js";

import { Context } from "./Store.jsx";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState({});

  const [state, dispatch] = useContext(Context);
  const { masterPokedex } = state;
  const updateSearchTerm = e =>
    setSearchTerm({
      ...searchTerm,
      query: e.target.value
    });

  useEffect(() => {
    const fuse = new Fuse(masterPokedex, {
      shouldSort: true,
      threshold: 0.3,
      location: 0,
      distance: 100,
      minMatchCharLength: 3,
      keys: ["name"]
    });

    if (!searchTerm.query) {
      return dispatch({
        type: "SET_ACTIVE_POKEDEX",
        payload: [...masterPokedex]
      });
    }

    if (searchTerm.query.length > 2) {
      const results = fuse.search(searchTerm.query);
      dispatch({
        type: "SET_NAME_FILTER",
        payload: searchTerm.query
      });
      return dispatch({
        type: "SET_ACTIVE_POKEDEX",
        payload: results.map(result => result.item)
      });
    }

    return undefined;
  }, [searchTerm, masterPokedex, dispatch]);

  return <input type="text" name="query" onChange={updateSearchTerm} />;
}
