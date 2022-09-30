import React, { useEffect, useState } from 'react';
/* import { useLocation, useRouteMatch } from 'react-router-dom'; */
import { useHistory } from 'react-router-dom';
import fetchIdRecipes from '../services/fetchDetails25';
import DetailsDrinks from '../components/DetailsDrink';
import DetailsMeals from '../components/DetailsMeals';

function RecipeDetails() {
  const [recipeDetails,
    setRecipeDetails] = useState([]);
  const history = useHistory();
  const { pathname } = history.location;

  useEffect(
    () => fetchIdRecipes(history, setRecipeDetails),
    [history],
  );
  return (
    <body>
      {pathname.split('/')[1] === 'meals'
        ? DetailsMeals(recipeDetails)
        : DetailsDrinks(recipeDetails) }
    </body>
  );
}

export default RecipeDetails;
