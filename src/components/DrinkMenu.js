import React, { useContext } from 'react';
import MyContext from '../context/Context';
import CardRecipe from './CardRecipe';

function DrinkMenu() {
  const { dataSearchDrink } = useContext(MyContext);
  const max = 12;

  return (
    <div>
      <h2>Cardápio de drink</h2>
      <ul>
        {Object.keys(dataSearchDrink).length !== 0 ? (
          (dataSearchDrink.drinks).splice(0, max).map((drink) => (
            <CardRecipe
              key={ drink.idDrink }
              imageSrc={ drink.strDrinkThumb }
              index={ drink.idDrink }
              name={ drink.strGlass }
            />

          ))
        ) : 'Menu'}
      </ul>
    </div>
  );
}

export default DrinkMenu;
