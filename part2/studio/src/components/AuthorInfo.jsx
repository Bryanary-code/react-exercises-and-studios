import recipedata from "./recipe.json";
import "./styling.css";

function AuthorInfo() {
  const authorImage = recipedata.map((data) => <div key={data.authorImage}><img src={data.authorImage} className="authorImage"/></div>)
  const authorInfo = recipedata.map((data) => <div key={data.author}>{data.author}</div>)
  const authorSite = recipedata.map((data) => <div key={data.website}><a href={data.website}>Site</a></div>)

   return (
    <div>
      {authorImage}
      {authorInfo}
      {authorSite}
    </div>

   )
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 