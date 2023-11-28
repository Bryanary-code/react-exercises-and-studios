import recipedata from "./recipe.json";

function RecipeName() {
  const name = recipedata.map((data) => 
    <h1 key={data.name}>{data.name}</h1>
     )
  ;
  return (<div>{name}</div>)
}

export default RecipeName;

//import return the name of the recipe as a level 1 header