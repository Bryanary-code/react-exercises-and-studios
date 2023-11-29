import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://houseofnasheats.com/chantilly-cake/";
   let authorPhoto = "https://houseofnasheats.com/wp-content/uploads/2021/09/House-of-Nash-Eats-Profile-Pic-1-300x300.jpg";
   let authorName = "Amy Nash";

   return (
      <div>
         <img src={authorPhoto} alt = {authorName} style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ['Assorted berries', 'Mascarpone cheese', 'eggs', 'butter', 'sugar'];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Chantilly Berry Cake</h1>
            <p>This Chantilly Cake is made with fluffy and moist vanilla cake layers and berry filling paired with luscious Chantilly cream.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img style={{width: '400px'}} src="https://preppykitchen.com/wp-content/uploads/2021/05/Chantilly-Cake-Feature.jpg" alt="Chantilly Cake" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
