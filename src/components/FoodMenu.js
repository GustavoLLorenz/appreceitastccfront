import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/Context';
import Recipes from './Recipes';

function Cardapio() {
  const { dataSearch } = useContext(MyContext);
  const [fetchData, setFetchData] = useState({});
  const maximumLine = 12;
  useEffect(() => {
    const apiRequest = async () => {
      const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const response = await fetch(URL);
      const data = await response.json();

      return setFetchData(data);
      // return data;
    };
    apiRequest();
    // setFetchData(apiRequest);
  }, []);

  return (
    <div>
      <h2>Cardápio de comida</h2>

      {Object.keys(fetchData).length !== 0 && fetchData.meals !== null ? (
        (fetchData.meals).splice(0, maximumLine).map((food, index) => (
          <Recipes
            key={ food.idMeal }
            imageSrc={ food.strMealThumb }
            index={ index }
            name={ food.strMeal }
          />
        ))
      ) : ''}

      <ul>

        {Object.keys(dataSearch).length !== 0 && dataSearch.meals !== null ? (
          (dataSearch.meals).splice(0, maximumLine).map((food) => (
            <Recipes
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
