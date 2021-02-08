import React from 'react'
import RecipesItem from './RecipesItem';

const  Recipes = (props) => {
    const {recipes} = props;
    return (
        <div className="row">
           {
               recipes ? recipes.map(rec => (
                <RecipesItem 
                   name = {rec.recipe.label}
                   img = {rec.recipe.image}
                   ingre = {rec.recipe.ingredientLines}
                />
              )) : "Recipes Not found"
           }
        </div>
    );
}

export default Recipes;
