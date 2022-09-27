import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/Context';
import Recipes from './Recipes';

function DrinkMenu() {
  const { dataSearchDrink } = useContext(MyContext);
  const [fetchDataDrinks, setFetchDataDrinks] = useState({});
  const maximumLine = 12;
  useEffect(() => {
    const apiRequest = async () => {
      const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      const response = await fetch(URL);
      const data = await response.json();

      return setFetchDataDrinks(data);
      // return data;
    };
    apiRequest();
    // setFetchData(apiRequest);
  }, []);

  return (
    <div>
      <h2>Cardápio de drink</h2>
      {Object.keys(fetchDataDrinks).length !== 0 && fetchDataDrinks.drinks !== null ? (
        (fetchDataDrinks.drinks).splice(0, maximumLine).map((drink, index) => (
          <Recipes
            key={ drink.idDrink }
            imageSrc={ drink.strDrinkThumb }
            index={ index }
            name={ drink.strDrink }
          />
        ))
      ) : ''}
      <ul>
        {Object.keys(dataSearchDrink).length !== 0 && dataSearchDrink.drinks !== null ? (
          (dataSearchDrink.drinks).splice(0, maximumLine).map((drink) => (
            <Recipes
              key={ drink.idDrink }
              imageSrc={ drink.strDrinkThumb }
              index={ drink.idDrink }
              name={ drink.strDrink }
            />

          ))
        ) : 'Menu'}
      </ul>
    </div>
  );
}

export default DrinkMenu;
