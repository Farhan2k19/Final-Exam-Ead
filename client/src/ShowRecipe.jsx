//fuinctional component
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const ShowRecipe = (props) => {
    const recipe = props.recipes.find(
        (recipe) => recipe.id === parseInt(props.match.params.id)
    );
    
    return (
        <div>
        <h1>{recipe.name}</h1>
        <h3>Ingredients</h3>
        <ul>
            {recipe.ingredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.name}</li>
            ))}
        </ul>
        <h3>Instructions</h3>
        <p>{recipe.instructions}</p>
        <Link to={`/recipes/${recipe.id}/edit`}>
            <Button variant='warning'>Edit Recipe</Button>
        </Link>
        <Link to='/recipes'>
            <Button variant='secondary'>Back to Recipes</Button>
        </Link>
        </div>
    );
    };
