//fuinctional component
import React from 'react';

import { useState } from 'react';
import { useEffect } from 'react';


const ShowRecipe = (props) => {
   
  const [recipe, setrecipe] = useState("")
  const [newrecipe, setnewrecipe] = useState("")
useEffect(() => {
  fetch("http://localhost:5000/showRecipes")
  .then(res => res.json())
  .then(data => setrecipe(data))
}, [])
    
    return (

        <>
      
        <h1>Recipes</h1>
        <div className="recipes">
        {recipe && recipe.map((recipe) => (
          <div className="recipe" key={recipe._id}>
            <h2>{recipe.title}</h2>
            <h3>{recipe.description}</h3>
            <p>{recipe.ingredients}</p>
              <p>{recipe.instructions}</p>
        
            <button onClick={() => {{
              <p>{recipe.ingredients}</p>}
              <p>{recipe.instructions}</p>
            }
            }>View</button>
  
            </div>
        ))}</div>

</>
    );
    };
//export
export default ShowRecipe;
