import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
   let authorLink = "https://www.loveandlemons.com/brownies-recipe/#wprm-recipe-container-42107"
   let authorPhoto = "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/IMG_41499-layers.jpg"
   let authorName = "Jeanine Donofrio"


return (
   <div className = {styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
      <div>
         <h3>{authorName}</h3>
         <a href={authorLink}>Love & Lemons</a> 
      </div>
   </div>
);


}

class RecipeDescription extends React.Component {
    render() {
        return <div> 
        <div>
           <h1>Best Homemade Brownies</h1>
           <p>With crispy edges, fudgy middles, and rich chocolate flavor, these homemade brownies will disappear in no time.</p>
        </div>
        <RecipeAuthor />
     </div>
    }
}

export default RecipeDescription;