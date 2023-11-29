import { useState } from 'react';

export default function BoardAssignment () {
   const [boardName, setBoardName] = useState("no boards yet!")
   const boards = [{
      label: "New Recipes",
      value: "NewRecipe"
   },
   {
      label: "Desserts",
      value: "Desserts"
   },
   {
      label: "Cakes",
      value: "Cakes"
   }];
  let option = boards.map((board, index) => 
  <option key={index} value={board.value}>{board.label}</option>)

   const handleChange = (event) => {
      setBoardName(event.target.value)
   }
  return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>{option}
      </select>

      <p>Saved to {boardName}!</p> 
      </div>
   );
}
