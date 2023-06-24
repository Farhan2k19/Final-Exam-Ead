import './App.css';

import { useState } from 'react';
import { useEffect } from 'react';
import AddRecipe from './AddRecipe';




function App() {

const [title, settitle] = useState("")
const [description, setdescription] = useState("")
const [ingredients, setingredients] = useState("")
const [instructions, setinstructions] = useState("")
const [newrecipe, setnewrecipe] = useState("")



  const addRecipe = () => {

    fetch("http://localhost:5000/addRecipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        title,
        description,
        ingredients,
        instructions,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setnewrecipe(data);
      });
  };
  const updateRecipe = (id) => {
    fetch(`http://localhost:5000/updateRecipe/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        title,
        description,
        ingredients,
        instructions,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setnewrecipe(data);
      });
  };

 
  const deleteRecipe = (id) => {
    fetch(`http://localhost:5000/deleteRecipe/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setnewrecipe(data);
      });
  };
  
  


  const [recipe, setrecipe] = useState("")

useEffect(() => {
  fetch("http://localhost:5000/showRecipes")
  .then(res => res.json())
  .then(data => setrecipe(data))
}, [])



  return (
   <>

    <div className="App">
      
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
      ))}
      </div>

      <div className="addRecipe">
        <h2>Add Recipe</h2>
        <input

          type="text"
          placeholder="title"
          onChange={(e) => settitle(e.target.value)}
        />
        <input

          type="text"
          placeholder="description"
          onChange={(e) => setdescription(e.target.value)}
        />
        <input
        
          
          type="text"
          placeholder="ingredients"
          onChange={(e) => setingredients(e.target.value)}
        />
        <input

          
          type="text"
          placeholder="instructions"
          onChange={(e) => setinstructions(e.target.value)}
        />
        <button onClick={addRecipe}>Add</button>

    </div>
    <div className="updateRecipe">
          
          <h2>Update Recipe</h2>
          <input

            type="text"
            placeholder="title"
            onChange={(e) => settitle(e.target.value)}
          />
          <input

            type="text"
            placeholder="description"
            onChange={(e) => setdescription(e.target.value)}
          />
          <input

          
            type="text"
            placeholder="ingredients"
            onChange={(e) => setingredients(e.target.value)}
          />
          <input

          type="text"
          placeholder="instructions"
          onChange={(e) => setinstructions(e.target.value)}
        />
        <button onClick={updateRecipe}>Update</button>
        </div>

        
        <div className="deleteRecipe">
        <h2>Delete Recipe</h2>
      
        <input

          
          type="text"
          placeholder="title"
          onChange={(e) => settitle(e.target.value)}
        />

        <button onClick={deleteRecipe}>Delete</button>

        </div>
     </div>


          
    

    </> 
  );
}

export default App;

