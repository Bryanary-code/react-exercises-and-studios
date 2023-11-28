import recipedata from "./recipe.json";
import "./styling.css";

function RecipeImage() {
  const image = recipedata.map((data) => 
  <img className="recipeImage" key={data.name} src=
  {data.recipeImage}/>
  )
   return ( <div>{image}</div>
   )
 
   
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 