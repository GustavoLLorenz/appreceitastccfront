import React, { useContext } from 'react';
import MyContext from '../context/Context';
import CardRecipe from './CardRecipe';

function Cardapio() {
  const { dataSearch } = useContext(MyContext);
  const maximumLine = 12;

  return (
    <div>
      <h2>Cardápio de comida</h2>
      <ul>
        {Object.keys(dataSearch).length !== 0 ? (
          (dataSearch.meals).splice(0, maximumLine).map((food) => (
            <CardRecipe
              key={ food.idMeal }
              imageSrc={ food.strMealThumb }
              index={ food.idMeal }
              name={ food.strMeal }
            />
          ))
        ) : ''}
      </ul>
    </div>
  );
}

export default Cardapio;
