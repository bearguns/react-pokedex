import React from "react";
import Store from "./Store.jsx";
import { Pokedex } from "./Pokedex.jsx";
import { Sidebar } from "./Sidebar.jsx";
import "../scss/main.scss";
import "../scss/components/App.scss";

function App() {
  return (
    <Store>
      <div className="App">
        <Sidebar />
        <Pokedex />
      </div>
    </Store>
  );
}

export default App;
