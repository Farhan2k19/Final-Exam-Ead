import './App.css';

import { useState } from 'react';
import { useEffect } from 'react';



function App() {



  const [recipe, setrecipe] = useState("")
  const [newrecipe, setnewrecipe] = useState("")
useEffect(() => {
  fetch("http://localhost:5000/showRecipes")
  .then(res => res.json())
  .then(data => setrecipe(data))
}, [])



  return (
    <div className="App">

      <h1>Recipe</h1>
      <div className="cars">
      {recipe && recipe.map((recipe) => (
        <div className="recipe" key={recipe._id}>
          <h2>{recipe.title}</h2>
          <h2>{recipe.instructions}</h2>

          <h3>{recipe.description}</h3>
          <h3>{recipe.ingredients}</h3>
          </div>
      ))}</div>
    </div>
  );
}

export default App;
