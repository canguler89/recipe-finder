import './App.css';
import SearchRecipes from "./components/SearchRecipes"
import RecipeList from "./components/RecipeList"

function App() {
  return (
    <div>
     <h1>Recipe Finder</h1>
     <SearchRecipes />
     <RecipeList />
    </div>
  );
}

export default App;
