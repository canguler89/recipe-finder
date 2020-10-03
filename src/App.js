import React, { Component } from "react";
import SearchRecipes from "./components/SearchRecipes";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Recipe Finder</h1>
        <SearchRecipes />
      </div>
    );
  }
}

export default App;
