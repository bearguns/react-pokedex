import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Store from "./Store.jsx";
import PokemonDetailsPage from "./pokemon/PokemonDetailsPage.jsx";
import Pokedex from "./pokemon/Pokedex.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";
import "../scss/main.scss";
import "../scss/components/App.scss";

function App() {
  return (
    <Store>
      <Router>
        <div className="App">
          <Sidebar />
          <Switch>
            <Route path="/:num">
              <PokemonDetailsPage />
            </Route>
            <Route path="/">
              <Pokedex />
            </Route>
          </Switch>
        </div>
      </Router>
    </Store>
  );
}

export default App;
