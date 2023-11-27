import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RateARecipe from "./components/RateARecipe";
import Button from "./components/Button";
import AuthorInfo from "./components/AuthorInfo";
import IngredientList from "./components/Ingredients";
import RecipeImage from "./components/RecipeImage";
import RecipeName from "./components/RecipeName";
import ClickedButton from "./components/ClickedButton";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RecipeImage />
      <RecipeName />
      <RateARecipe rating={4} />
      <Button saveButton={true} />
      <AuthorInfo />
      <IngredientList />
    </>
  );
}

export default App;
