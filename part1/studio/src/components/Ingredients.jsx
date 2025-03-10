import styles from './Ingredients.module.css';

function RecipeIngredients() {
    let ingredients = ['Unsweetened cocoa powder', 'Oil', 'Powdered Sugar', 'Eggs + water', 'Vanilla extract']

return    <div>
   <h3>Recipe Ingredients</h3>
   <ul className = {styles.ingredientList}>
      <li>{ingredients[0]}</li>
      <li>{ingredients[1]}</li>
      <li>{ingredients[2]}</li>
      <li>{ingredients[3]}</li>
      <li>{ingredients[4]}</li>
   </ul>
</div>
}

export default RecipeIngredients;