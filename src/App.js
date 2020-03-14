import React from "react";
import { Pokedex } from "./Pokedex.jsx";
import { Sidebar } from "./Sidebar.jsx";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Pokedex />
    </div>
  );
}

export default App;
